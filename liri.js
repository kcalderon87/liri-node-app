var keys = require('./keys.js');
var fs = require('fs');
var twitter = require('twitter');
var spotify = require('spotify');
var request = require ("request");

//----argvs-----
var action = process.argv[2];
var value = process.argv[3];

//----random and switch cases-----
function random(){
	switch (action){
		case 'my-tweets':
			tweets();
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
