const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    slackId: String,
});

// FIX TSHI HARD CODE
module.exports = mongoose.model('users', userSchema, 't25mt190a');
