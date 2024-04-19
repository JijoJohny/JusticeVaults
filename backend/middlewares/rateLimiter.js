const rateLimit = require('express-rate-limit');

const loginRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 5, 
  standardHeaders: true, 
  legacyHeaders: false,
  handler: function (req, res, ) {
    res.status(429).json({
      message: "Too many login attempts from this IP, please try again after 15 minutes"
    });
  }
});

const generalRateLimiter = rateLimit({
    windowMs: 10 * 60 * 1000, 
    max: 100,
    message: "Too many requests from this IP, please try again after 10 minutes"
  });
  

module.exports = { loginRateLimiter, generalRateLimiter };