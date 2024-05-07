// models/File.js

const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  fileId: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true
  },
  fileName: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  fileUrl: {
    type: String,
    required: true
  },
  caseId: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
