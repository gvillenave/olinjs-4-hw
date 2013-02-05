
/*
 * POST new tweet
 */

var Tweet = require('../models/tweet');

exports.new = function(req, res){
    var newTweet = new Tweet({ message: req.body.tweet, author: req.params.user, timestamp: Date.now() });
    newTweet.save(function (err) {
        if (err)
            return console.log("error while posting the tweet");
        console.log("successfully posted tweet from " + req.params.user + ": " + req.body.tweet);
    });
};