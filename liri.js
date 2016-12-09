var keys = require('./keys.js');
var fs = require('fs');

var twitter = require('twitter');
var spotify = require('spotify');
var request = require ("request");

//----argvs-----
var action = process.argv[2];
var value = process.argv[3];

//random function & switch cases
function random(){
	switch (action){
		case 'my-tweets':
			myTweets();
		break;

		case 'spotify-this-song':
			spotifySong();
		break;

		case 'movie-this':
			movieThis();
		break;

		case 'do-what-it-says':
			doWhat();
		break;
	}
}


//----20 tweets-----
function myTweets(){
	var client = new twitter(keys.twitterKeys);
	var params = {screen_name: 'kimsos'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  		if (!error) {
  			fs.appendFile('log.txt', "!!Last 20 Tweets!!" + '\n');
    	  	for (var i = 0; i < 20; i++) {
  			}		
  		}  else {
  			console.log('error detail: ' + error);
  		}    	
  		
	});
}


