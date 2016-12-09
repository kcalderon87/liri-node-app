//----variables----
var keys = require('./keys.js');
var fs = require('fs');

var twitter = require('twitter');
var spotify = require('spotify');
var request = require ("request");

//----argvs-----
var action = process.argv[2];
var value = process.argv[3];

//-----random  and switch cases----
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
			doWhatItSays();
		break;
	}
}


//----20 tweets-----
function myTweets(){
	var client = new twitter(keys.twitterKeys);
	var params = {screen_name: 'kimsos'};
	client.get('statuses/user_timeline', params, function(error, tweets, response){
  		if (!error) {
    	  	for (var i = 0; i < 20; i++) {
    	  		console.log('__Tweet: ' +tweets[i].text);
  			}		
  		}  else {
  			console.log('error detail: ' + error);
  		}    	
  		
	});
}

//----search for a movie----
function movieThis() {
	var value = process.argv[3] || "Mr. Nobody";
	var queryUrl = 'http://www.omdbapi.com/?&y=&plot=short&r=json&tomatoes=true&t=' + value;
	request(queryUrl, function(err, response, body) {
	if ( err ) {
        console.log('error detail: ' + err);
        return;
    } else {
		body = JSON.parse(body);
		console.log("Title: " + body.Title);
		console.log("Year: " + body.Year);
		console.log("IMDB Rating: " + body.imdbRating);
		console.log("Country: " + body.Country);
		console.log("Language: " + body.Language);
		console.log("Plot: " + body.Plot);
		console.log("Actors :" + body.Actors);
		console.log("Rotten Tomatoes Rating: " + body.tomatoRating);
		console.log("Rotten Tomatoes URL: " + body.tomatoURL);
	}
});
}

//----spotify----
function spotifySong() {
var value = process.argv[3] || "the sign";
spotify.search({ type: 'track', query: value }, function(err, data) {
    if ( err ) {
        console.log('error detail: ' + err);
        return;
    } else {
    	console.log('Artist: ' + data.tracks.items[0].artists[0].name);
        console.log('Song_Name: ' + data.tracks.items[0].name);
        console.log('Preview_url: ' + data.tracks.items[0].preview_url);
        console.log('Album: ' + data.tracks.items[0].album.name);
    }
 });
}

//----do what it says-----
function doWhatItSays() {
	fs.readFile('./random.txt', "utf8", function(err, data){
		if (err) {
			console.log('error detail: ' +err);
		}
		splitData = data.split(',');
		action = splitData[0];
		value = splitData[1];		
		random();
	});
}

random();
