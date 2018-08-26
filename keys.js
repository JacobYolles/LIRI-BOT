// This page is controlling all the exported keys for the different devices that are running.  AKA SPOTIFY ETC. 

console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};
