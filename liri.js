require("dotenv").config();

var keys = require("./keys.js");

// var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");
// grab arguments in node terminal

var nodeArgs = process.argv[2];

// package for reading and writing files 
var fs = require('fs');

// function spotifyThis(nameOfSong){
//   if (nameOfSong === undefined){
//     nameOfSong === "The Sign";
//   }


console.log('is this working?');