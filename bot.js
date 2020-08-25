var twit = require('twit/lib/twitter');
var config = require('./config.js');
var schedule= require('node-schedule');
var Twitter = new twit(config);


var messages = ["make a wish 💫", "wish :)","make a wish 🥺","don't forget to wish!", "WISH","make a wish 😤", "did you wish 😳", "make a wish!!!", "omg wish", "make a wishhhh"]

var messageLocation = 0;

var writeTweet = function() {
    Twitter.post('statuses/update', {
        status: messages[messageLocation]
    }, function(err, data, response) {
        console.log(data)
    });
    messageLocation += 1;
}
 
var j=schedule.scheduleJob('11 11,23 * * 0-6',writeTweet);




