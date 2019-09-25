require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);
// var spotifyThis = require('spotify.js');
// package for reading and writing files 
var fs = require('fs');

// grab arguments in node terminal
//creates the user inputs to search for specific song 
var command = process.argv[2];
var parameter = process.argv.splice(3).join(' ');


console.log('is this working?');

function switchCase (){
  switch (command){
    case 'spotify-this-song':
    spotifySong(parameter);
    break;
    
    case 'movie-this':
    omdbInfo(parameter);
    break
  }
};
//SPOTIFY
let spotifyThis = "Spotify"

function spotifySong(parameter) {


  var searchSong;
  if (!parameter) {
    searchSong = "Ace of Base The Sign";
  } else {
    searchTrack = parameter;
  }

  spotify.search({
    type: 'track',
    query: searchSong
  }, function(error, data) {
    if (error) {
      display('Error recorded: ' + error);
      return;
    } else {
      console.log(data);
      console.log("\n---------------------------------------------------\n");
      console.log("Artist: " + data.tracks.items[0].artists[0].name);
      console.log("Song: " + data.tracks.items[0].name);
      console.log("Preview: " + data.tracks.items[3].preview_url);
      console.log("Album: " + data.tracks.items[0].album.name);
      console.log("\n---------------------------------------------------\n");
      
    }
  
  });
};
spotifySong();