const S3 = require("aws-sdk/clients/s3");
const File = require("../models/files");
const logger = require('../middlewares/logger');
require('dotenv').config();

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;
const endpoint = process.env.ENDPOINT;

const s3 = new S3({
  accessKeyId,
  secretAccessKey,
  endpoint,
  s3ForcePathStyle: true
});

async function getFileFromStorj(req, res) {
    try {
        const { fileName } = req.body;

        if (!fileName) {
            return res.status(400).json({ error: 'File name is required' });
        }
        const fileDetails = await File.findOne({ fileName });

        if (!fileDetails) {
            logger.error(`File details for ${fileName} not found in database`);
            return res.status(404).json({ error: 'File details not found in database' });
        }
        const params = {
            Bucket: "justicevault",
            Key: fileDetails.fileId
        };

        try {
            const fileData = await s3.getObject(params).promise();

            res.setHeader('Content-disposition', `attachment; filename=${fileName}`);
            res.setHeader('Content-type', fileData.ContentType);

            // res.json({
        //     fileName,
        //     description: fileDetails ? fileDetails.description : 'Description not available',
        //     fileContent: fileData.Body.toString('base64') // Convert file data to base64 string
        // });

            res.send(fileData.Body);
        } catch (error) {
            if (error.code === 'NoSuchKey') {
                logger.error(`File with key not found`);
                return res.status(404).json({ error: 'File not found' });
            }
            throw error; 
        }
    } catch (error) {
        logger.error("Error retrieving file:", error);
        console.error("Error retrieving file:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getFileFromStorj };
