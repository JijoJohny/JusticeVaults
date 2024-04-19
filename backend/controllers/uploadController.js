const S3 = require("aws-sdk/clients/s3");
const File = require("../models/files");
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
    if (!req.file || !req.user) {
        return res.status(400).json({ error: 'File and user information are required' });
    }

    const user = req.user;
    const file = req.file;

    const fileName = file.originalname;
    const fileBuffer = file.buffer;

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

    const fileData = {
        username: user.username, 
        fileName,
        fileUrl: uploadResponse.Location,
        timestamp: Date.now()
    };

    await File.create(fileData);

    console.log("File data stored in the database");

    return res.status(201).json({ message: 'File uploaded successfully', fileUrl: uploadResponse.Location });
} catch (error) {
    console.error("Error uploading file:", error);
    return res.status(500).json({ error: 'Internal server error' });
}
}

module.exports = { uploadFileToStorj };
