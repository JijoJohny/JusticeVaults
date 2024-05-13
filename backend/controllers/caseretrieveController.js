const logger = require('../middlewares/logger');
const Case = require('../models/case');
const File = require('../models/files');

async function getCaseWithFiles(req, res) {
    try {
        const { caseId } = req.body;

        const caseDetails = await Case.findOne({ caseId });
        if (!caseDetails) {
            return res.status(400).json({ error: 'Case not found' });
        }

        const caseFiles = await File.find({ caseId });

        const response = {
            caseId: caseDetails.caseId,
            name: caseDetails.name,
            description: caseDetails.description,
            date: caseDetails.date,
            files: caseFiles.map(file => ({
                fileId: file.id,
                fileName: file.fileName,
                description: file.description,
                timestamp: file.timestamp
            }))
        };

        logger.info(`Case details viewed by (Username: ${req.user.username})`);
        console.log("Case details with files retrieved successfully");
        return res.json(response);
    } catch (error) {
        logger.info("Error Fetching case with files:",error)
        console.error('Error fetching case with files:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

module.exports = { getCaseWithFiles };
