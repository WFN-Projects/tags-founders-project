const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    slackId: String,
    slackTeamId: String,
    slackDomain: String,

});

mongoose.model('users', userSchema);
