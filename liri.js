//////////////////////////////////////////////////This page will be for the actual "Liri" App to run.///////////////////////////////////////

/////////////////////////////////////////////// BEFORE CODING: RUN THE REQUIRES AT TOP: //////////////////////////////////////////////////////////////////////////////////////////////

require("dotenv").config();
// var inquirer = require("inquirer");
var spotify = require('spotify');  // Spotify
var request = require('request');  // Movies
var fs = require('fs'); // File Structure
var keys = require("./keys.js");    // Keys file for all consumer and secret keys.




////////////////////////////////////////////////////////// Creating all requires:(Variables)////////////////////////////////////////////////////
var inputCommand = process.argv[2]; // This is the switch function to initate what it is the user wants to do function wise. AKA Spotify etc.
var commandParam = process.arv[3];  // This is the specific function or song part that the user wants after they are inside the application.
var defaultMovie = "Ghostbusters"
var defaultSong = "Kiss from a rose"
var spotify = new Spotify(keys.spotify);

// var undefined = undefined


// Known variables to make work:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says
//



/////////////////////////////////////////////////////////////////// Create Functions ////////////////////////////////////////////////////

// Create an overarching command shell for command input

function processCommands(command, commandParam)

// console.log(commandParam);
switch (command) {

    // Run the spotify this song functionality.
    case "spotify-this-song":
    // if the user does not pick a song use my var for default song.
    if (commandParam === undefined) {
        commandParam === defaultSong;
    }
    // Otherwise run my next functionality for the spotify command!
    spotifyThisSong(commandParam); break;

    // Run the movie fetch functionality
    case "movie-this":
    // if the user does not pick a movie use my var for default movie.
    if (commandParam === undefined) {
        commandParam === defaultMovie;
    }
    // Otherwise run my next functionality for the movie command!
    movieThis(commandParam); break;

    // Run the do what it says functionality for the do what it says command.
    case "do-what-it-says":
    // Run the functionality for the do what it says command. 
    doWhatItSays(); break;

    // Set a default stop action behavior for if the user doesn't enter one of these variables.
    default: 
		console.log("Invalid command. Please type any of the following commands: 1. spotify-this-song 2. movie-this or 3. do-what-it-says");

}// End tag for the switch command.

function spotifyThisSong(song) {
    // First setting a variable for if the user skips or doesn't enter a song to be my default of Seals' kiss from a rose song.
    if (song === "") {
        song = "Kiss from a rose";
    } // end tag for the first if.

    spotify.search({ type: 'track', query: song}, function(err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }
    
        var song = data.tracks.items[0];
        console.log("------Artists-----");
        for(i=0; i<song.artists.length; i++){
            console.log(song.artists[i].name);
        }
    
        console.log("------Song Name-----");
        console.log(song.name);
    
        console.log("-------Preview Link-----");
        console.log(song.preview_url);
    
        console.log("-------Album-----");
        console.log(song.album.name);
    
        }); // End tag for the spotify.search functionality.

}// end tag for the function spotifythis song command.



/////////////////////////////////////////////////////////////////// Main run Callback Function ////////////////////////////////////////////////////


processCommands(inputCommand, commandParam);