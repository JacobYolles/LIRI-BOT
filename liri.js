//////////////////////////////////////////////////This page will be for the actual "Liri" App to run.///////////////////////////////////////

/////////////////////////////////////////////// BEFORE CODING: RUN THE REQUIRES AT TOP: //////////////////////////////////////////////////////////////////////////////////////////////

require("dotenv").config();
// var inquirer = require("inquirer");
var Spotify = require('node-spotify-api');;  // Spotify
var request = require("request"); // Movies
var fs = require("fs"); // File Structure
var keys = require("./keys.js");    // Keys file for all consumer and secret keys.
var spotify = new Spotify(keys.spotify);



////////////////////////////////////////////////////////// Creating all requires:(Variables)////////////////////////////////////////////////////
var inputCommand = process.argv[2]; // This is the switch function to initate what it is the user wants to do function wise. AKA Spotify etc.
var commandParam = process.argv[3];  // This is the specific function or song part that the user wants after they are inside the application.
var defaultMovie = "Mr+Nobody"
var defaultSong = "Kiss from a rose"
var defaultConcert = "Seal"
// var defaultConcert = "Neil Diamond"


// var undefined = undefined


// Known variables to make work:
// concert-this
// spotify-this-song
// movie-this
// do-what-it-says
//



/////////////////////////////////////////////////////////////////// Create Functions ////////////////////////////////////////////////////

// Create an overarching command shell for command input

function processCommands(command, commandParam) {

// console.log(commandParam);
switch(command){
    // Run the concert this functionality
    case "concert-this":
    // //if the user does not pick a concert, use my var for default concert.
    if (commandParam === undefined) {
        commandParam === defaultConcert;
    }
    concertThis(commandParam); break;

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


}// end tag for the function command from process commands.

// spotify.search({ type: 'track', query: 'dancing in the moonlight' }, function(err, data) {
//     if ( err ) {
//         console.log('Error occurred: ' + err);
//         return;
//     }
 
//     // Do something with 'data'
// });

function spotifyThisSong(song) {
    var song = process.argv.slice(3);
    // First setting a variable for if the user skips or doesn't enter a song to be my default of Seals' kiss from a rose song.
    if (process.argv.slice(3) === {}); {
        song = defaultSong;
    } // end tag for the first if.

    
    spotify.search({ type: "track", query: song}, function(err, data) {
        
        if (err) {
            console.log("Error occurred: " + err);
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


////////////////////////////////////////////////////// MOVIE: //////////////////////////////////////////////////////////////////////////////
//Create the movie command


function movieThis(movieName){
    var movieName = process.argv.slice(3);

    if (process.argv.slice(3) === {}); {
        movieName = defaultMovie;
    }
    console.log(movieName)

    




    // Grab the movieName which will always be the third node argument.

    
    // Then run a request to the OMDB API with the movie specified
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // "http://www.omdbapi.com/?t=titanic&y=&plot=short&apikey=trilogy"
    // This line is just to help us debug against the actual URL.
    console.log(queryUrl);
    
    request(queryUrl, function(error, response, body) {
    
      // If the request is successful
      if (!error && response.statusCode === 200) {
    
        // Parse the body of the site and recover just the imdbRating
        // (Note: The syntax below for parsing isn't obvious. Just spend a few moments dissecting it).
       console.log(JSON.parse(response.body));
       console.log(JSON.parse(body).Title);
       console.log(JSON.parse(body).Year);
       console.log(JSON.parse(body).Ratings[0]);
       console.log(JSON.parse(body).Ratings[1]);
       console.log(JSON.parse(body).Country);
       console.log(JSON.parse(body).Language);
       console.log(JSON.parse(body).Plot);
       console.log(JSON.parse(body).Actors);
    //    console.log(JSON.parse(response.body.title))
      }
    });
};
// for (var i = 2; i <process.argv.length; i++) {
//     if (i === 2) {
//         movieName +=process.argv[i];
//     } else {
//         movieName =+ "+" +process.argv[i] 
//      }
// }


    // "http://www.omdbapi.com/?t=titanic&y=&plot=short&apikey=trilogy"
    

////////////////////////////////////////////////////// Concert: //////////////////////////////////////////////////////////////////////////////
    function concertThis(concert) {
    var concert = process.argv.slice(3);
    if (process.argv.slice(3) === {}); {
    concert = defaultConcert;
    }
    console.log(concert)

var queryUrlTwo = "https://rest.bandsintown.com/artists/" + concert + "/events?app_id=codingbootcamp";
console.log(queryUrlTwo);

    request(queryUrlTwo, function(error, response, body) { 
        if (!error && response.statusCode === 200) {
            console.log(JSON.parse(response.body));
            console.log(JSON.parse(body));
            console.log(JSON.parse(response.body).lineup);

        }// console logs end.
    }) // Request(QueryUrlTwo, function(error, response, body) { end
    } // function concertThis(concert) end
// "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
// "https://rest.bandsintown.com/artists/seal/events?app_id=codingbootcamp"

////////////////////////////////////////////////////// Do what it says: //////////////////////////////////////////////////////////////////////////////
// Create the do what it says command.
function doWhatItSays(){
	fs.readFile("random.txt", "utf8", function(err, data){

		if (err){ 
			return console.log(err);
		}

		var dataArr = data.split(",");

		processCommands(dataArr[0], dataArr[1]);
	});
}

/////////////////////////////////////////////////////////////////// Main run Callback Function ////////////////////////////////////////////////////


processCommands(inputCommand, commandParam);