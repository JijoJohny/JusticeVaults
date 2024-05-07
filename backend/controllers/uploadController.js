const S3 = require("aws-sdk/clients/s3");
const File = require("../models/files");
const Case = require("../models/case");
const logger = require('../middlewares/logger');
const crypto = require('crypto');
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
        if (!req.body.caseId) {
            return res.status(400).json({ error: 'Case ID is required' });
        }
        if (!req.body.id) {
            return res.status(400).json({ error: 'ID is required' });
        }

        const user = req.user;
        const file = req.file;
        const id = req.body.id
        const description = req.body.description; 
        const fileName = req.body.fileName; 
        const caseId = req.body.caseId;

        const fileBuffer = file.buffer;

        const existingCase = await Case.findOne({ caseId });
        if (!existingCase) {
            return res.status(400).json({ error: 'Case with this ID does not exist' });
        }

        const existingFile = await File.findOne({ fileName });
        if (existingFile) {
            return res.status(400).json({ error: 'File with this filename already exists' });
        }

        const hash = crypto.createHash('sha256');
        hash.update(fileBuffer);
        const fileId = hash.digest('hex');

        const params = {
            Bucket: "justicevault",
            Key: fileId,
            Body: fileBuffer,
            ContentType: file.mimetype
        };

        const uploadResponse = await s3.upload(params, {
            partSize: 64 * 1024 * 1024
        }).promise();

        console.log("File uploaded successfully:", uploadResponse.Location);

        const fileData = new File({
            id,
            fileId,
            username: user.username,
            fileName,
            description,
            fileUrl: uploadResponse.Location,
            caseId,
            timestamp: Date.now()
        });
        await fileData.save();
        logger.info(`File uploaded successfully by (Username: ${user.username})`);
        console.log("File data stored in the database");

        return res.status(201).json({ message: 'File uploaded successfully' });
    } catch (error) {
        logger.error(`Error uploading file: ${error.message} (Username: ${req.user.username})`);
        console.error("Error uploading file:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { uploadFileToStorj };