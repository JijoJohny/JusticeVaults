const express = require('express');
const router = express.Router();
const upload = require('../middlewares/multer');
const { authenticateToken } = require('../middlewares/authMiddleware');
const { uploadFileToStorj } = require('../controllers/uploadController');
const {getFileFromStorj} = require('../controllers/retrieveController')

router.post('/upload', authenticateToken, upload.single('file'), uploadFileToStorj);
router.post('/retrieve',authenticateToken,getFileFromStorj)

module.exports = router;
