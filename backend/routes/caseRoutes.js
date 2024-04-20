const express = require('express');
const router = express.Router();
const { authenticateToken } = require('../middlewares/authMiddleware');
const { addCase } = require('../controllers/caseController');

router.post('/add', authenticateToken, addCase);

module.exports = router;
