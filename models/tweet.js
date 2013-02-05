var mongoose = require('mongoose');

var tweetSchema = mongoose.Schema({
    message: String,
    author: String,
    timestamp: Number
});

var Tweet = mongoose.model('Tweet', tweetSchema);

module.exports = Tweet;