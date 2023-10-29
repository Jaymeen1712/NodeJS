const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  // Other user fields go here
});

module.exports = mongoose.model('User', userSchema);
