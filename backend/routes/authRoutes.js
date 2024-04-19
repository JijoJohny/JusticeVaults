const express = require('express');
const router = express.Router();
const { loginRateLimiter, generalRateLimiter } = require('../middlewares/rateLimiter');
const { loginUser, registerUser } = require('../controllers/userController');

router.post('/login',loginRateLimiter, loginUser);
router.post('/register', registerUser);

module.exports = router;
