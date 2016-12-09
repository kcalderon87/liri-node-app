var keys = require('./keys.js');
var fs = require('fs');
var request = require ("request");
var twitter = require('twitter');
var spotify = require('spotify');

//----argvs-----
var action = process.argv[2];
var value = process.argv[3];

