const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  firstName: String,
  lastName: String,
  image: String,
  googleId: String,
  creationDate: Date
});

mongoose.model('users', userSchema);
