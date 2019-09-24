// package for reading and writing files 
var fs = require('fs');

var keys = require("./keys.js");

var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);


function spotifyThis(userInput){
  var nameOfSong = userInput;
  if (!nameOfSong){
    nameOfSong === "The Sign by Ace of Base";
  }
  spotify.search({
    type: 'track',
    query: 'song'
  },
  function(err, data){
   if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
});

  // Next, we append the text into the "random.txt" file to store all the song search
// If the file didn't exist, then it gets created on the fly.
fs.appendFile("random.txt", " now this", function(err) {

  // If an error was experienced we will log it.
  if (err) {
    console.log(err);
  }

  // If no error is experienced, we'll log the phrase "Content Added" to our node console.
  else {
    console.log("Content Added!");
  }

});