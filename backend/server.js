const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const fileRoutes = require('./routes/fileRoutes')
const caseRoutes = require('./routes/caseRoutes')
const helmet = require('helmet');
const logger = require('./middlewares/logger');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(helmet());

app.use(helmet.contentSecurityPolicy({
 directives: {
     defaultSrc: ["'self'"],
     scriptSrc: ["'self'", "https://trusted.cdn.com"],
     objectSrc: ["'none'"],
     upgradeInsecureRequests: [],
 }
}));


app.use((req, res, next) => {
 res.setHeader('X-Frame-Options', 'DENY'); // Prevent clickjacking.
 res.setHeader('X-XSS-Protection', '1; mode=block'); // Enable XSS filtering (in case browsers ignore Content-Security-Policy header)
 res.setHeader('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload'); // Enforce HTTPS
 next();
});


// app.use((req, res, next) => {
//   if (!req.secure) {
//     return res.redirect(`https://${req.hostname}${req.url}`);
//   }
//   next();
// });

app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/court', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  logger.info('Connected to MongoDB');

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
  });
})
.catch((error) => {
  logger.error('Error connecting to MongoDB:', error);
  process.exit(1);
});

app.get('/', (req, res) => {
  res.send('');
});

app.use('/auth', authRoutes);
app.use('/file',fileRoutes)
app.use('/case',caseRoutes)

app.use((err, req, res, next) => {
  logger.error('Internal server error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

module.exports = app;
