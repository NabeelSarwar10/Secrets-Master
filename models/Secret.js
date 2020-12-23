const mongoose = require('mongoose');

const secretSchema = new mongoose.Schema({
  secret: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = User = mongoose.model('secrets', secretSchema);
