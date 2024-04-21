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
  s3ForcePathStyle: true,
  signatureVersion: "v4",
  connectTimeout: 0,
  httpOptions: { timeout: 0 }
});

async function uploadFileToStorj(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'File is required' });
        }
        if (!req.body.fileName) {
            return res.status(400).json({ error: 'Filename is required' });
        }

        const user = req.user;
        const file = req.file;
        const description = req.body.description; 
        const fileName = req.body.fileName; 

        const fileBuffer = file.buffer;

        const existingFile = await File.findOne({ fileName });
        if (existingFile) {
            return res.status(400).json({ error: 'File with this filename already exists' });
        }

        const params = {
            Bucket: "justicevault",
            Key: fileName,
            Body: fileBuffer,
            ContentType: file.mimetype
        };

        const uploadResponse = await s3.upload(params, {
            partSize: 64 * 1024 * 1024
        }).promise();

        console.log("File uploaded successfully:", uploadResponse.Location);

        const fileData = new File({
            fileId: uploadResponse.Key,
            username: user.username,
            fileName,
            description,
            fileUrl: uploadResponse.Location,
            timestamp: Date.now()
        });
        await fileData.save();
        logger.info(`File uploaded successfully by (Username: ${user.username})`);
        console.log("File data stored in the database");

        return res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
        logger.error(`Error uploading file: ${error.message} (Username: ${user.username})`);
        console.error("Error uploading file:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { uploadFileToStorj };
