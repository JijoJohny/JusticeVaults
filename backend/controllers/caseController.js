const Case = require('../models/case'); 
const logger = require('../middlewares/logger');

async function addCase(req, res) {
    try {
        const { caseId, name, description } = req.body;
        if (!req.body.caseId ) {
            return res.status(400).json({ error: 'Please provide caseId.' });
        }
        if (!name ) {
            return res.status(400).json({ error: 'Please provide name' });
        }
        if ( !description) {
            return res.status(400).json({ error: 'Please provide description' });
        }

        const existingCase = await Case.findOne({ caseId });
        if (existingCase) {
            return res.status(400).json({ error: 'Case with this caseId already exists' });
        }

        const newCase = new Case({
            caseId,
            name,
            description
        });

        await newCase.save();
        logger.info('Case details added successfully', { caseId, name, description });
        res.status(201).json({ message: 'Case details added successfully', case: newCase });
    } catch (error) {
        ogger.error('Error adding case details', { error });
        console.error('Error adding case details:', error);
        res.status(500).json({ error: 'An error occurred while adding case details' });
    }
}

module.exports = {
    addCase
};
