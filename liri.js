require("dotenv").config();

var keys = require("./keys.js");

var spotifyThis = require('spotify.js');
// package for reading and writing files 
var fs = require('fs');

// grab arguments in node terminal
//creates the user inputs to search for specific song 
var userRequest = process.argv[2];
var userInput = process.argv.splice(3).join(' ');


console.log('is this working?');


if (process.argv[2] === "spotify-this-song"){
  var song = userInput
  spotifyThis();
}
module.exports = Spotify