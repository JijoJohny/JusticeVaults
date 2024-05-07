const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const { addCase } = require('../controllers/caseController');
const { getCaseWithFiles } = require('../controllers/caseretrieveController')

router.post('/add', authenticateToken, addCase);
router.post('/retrieve', authenticateToken, getCaseWithFiles);

module.exports = router;
