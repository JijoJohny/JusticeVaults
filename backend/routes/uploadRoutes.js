const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { uploadFileToStorj } = require('../controllers/uploadController');

router.post('/upload', authenticateToken, upload.single('file'), uploadFileToStorj);

module.exports = router;
