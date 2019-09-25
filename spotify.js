// // package for reading and writing files 
// var fs = require('fs');

// var keys = require("./keys.js");

// var Spotify = require("node-spotify-api");
// var spotify = new Spotify(keys.spotify);


// function spotifyThis(userInput){
//   var nameOfSong = userInput;
//   if (!nameOfSong){
//     nameOfSong === "The Sign by Ace of Base";
//   }
//   spotify.search({
//     type: 'track',
//     query: 'song'
//   },
//   function(err, data){
//    if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
// });


// //SPOTIFY
// let spotifyFig = "Spotify"

// function spotifySong(parameter) {


//   var searchTrack;
//   if (parameter === undefined) {
//     searchTrack = "Ace of Base The Sign";
//   } else {
//     searchTrack = parameter;
//   }

//   figlet(spotifyFig, function(err, data) {
//     if (err) {
//         console.log('Something went wrong...');
//         console.dir(err);
//         return;
//     }
//     console.log(chalk.green(data));
// });

//   spotify.search({
//     type: 'track',
//     query: searchTrack
//   }, function(error, data) {
//     if (error) {
//       display('Error recorded: ' + error);
//       return;
//     } else {
//       display(chalk.blue("\n---------------------------------------------------\n"));
//       display(chalk.green("Artist: " + data.tracks.items[0].artists[0].name));
//       display(chalk.green("Song: " + data.tracks.items[0].name));
//       display(chalk.green("Preview: " + data.tracks.items[3].preview_url));
//       display(chalk.green("Album: " + data.tracks.items[0].album.name));
//       display(chalk.blue("\n---------------------------------------------------\n"));
      
//     }
  
//   });
// };

//   // Next, we append the text into the "random.txt" file to store all the song search
// // If the file didn't exist, then it gets created on the fly.
// fs.appendFile("random.txt", userInput, function(err) {

//   // If an error was experienced we will log it.
//   if (err) throw err; {
//     console.log("Another Song Saved");
//   }

//   // If no error is experienced, we'll log the phrase "Content Added" to our node console.
//   else {
//     console.log("Content Added!");
//   }

// });
