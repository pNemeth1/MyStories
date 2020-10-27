const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const storySchema = new Schema({
    title: String,
    description: String,
    text: String,
    user: String
});

module.exports = mongoose.model('stories', storySchema);