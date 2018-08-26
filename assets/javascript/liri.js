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



/////////////////////////////////////////////////////////////////// Create Functions ////////////////////////////////////////////////////s

// Create an overarching command shell for command input

function processCommands(command, commandParam)

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

