// This page will be for the actual "Liri" App to run.

require("dotenv").config();

// Creating all requires:
// var inquirer = require("inquirer");
var spotify = require('spotify');  // Spotify
var request = require('request');  // Movies
var fs = require('fs'); // File Structure
var keys = require("./keys.js");    // Keys file for all consumer and secret keys.


var spotify = new Spotify(keys.spotify);

// Known variables to make work:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says
//l