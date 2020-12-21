const express = require('express');
const app = express();
const Joi = require("joi");
const fs = require("fs");
const SpotifyWebApi = require('spotify-web-api-node');
const path = require('path')


app.use(express.static(path.join(__dirname, 'client')));

var scopes = ['user-read-private', 'user-read-email'],
  redirectUri = 'http://localhost:3000',
  clientId = '9603daa58de14596a5a42fdbd2280c54',
  state = 'Virginia',
  showDialog = true,
  responseType = 'token';
 
// Setting credentials can be done in the wrapper's constructor, or using the API object's setters.
var spotifyApi = new SpotifyWebApi({
  redirectUri: redirectUri,
  clientId: clientId
});
 
// Create the authorization URL
var authorizeURL = spotifyApi.createAuthorizeURL(
  scopes,
  state,
  showDialog,
  responseType
);
 
// https://accounts.spotify.com/authorize?client_id=5fe01282e44241328a84e7c5cc169165&response_type=token&redirect_uri=https://example.com/callback&scope=user-read-private%20user-read-email&state=some-state-of-my-choice&show_dialog=true
console.log(authorizeURL);
var spotifyApi = new SpotifyWebApi({
    // If code does not work, got to http://localhost:3000/login after starting node server, and also copy the link inside the terminal and put in in browser to log in.
    accessToken: 'BQBKAOGOP2aUZiEca75oTYs_kYrbzdyU3bWVoUukkLmZ8_1PML980UHhPR2HVCao_AvVBtKlpWSUL6R64sZS-K7reDSsM_-OgANlhN48BpB4uaGyXL0odfQPTiscKnA-bhXbH2sz87b7KkOvSJKdrqDE3K8n-qNCGFg3sq2pfRfPhbUQhYk'
});

spotifyApi.getPlaylist('6wObnEPQ63a4kei1sEcMdH')
  .then(function(data) {
    console.log('Some information about this playlist', data.body.tracks.items);
  }, function(err) {
    console.log('Something went wrong!', err);
});

// app.get('/login', function(req, res) {
//     var scopes = 'user-read-private user-read-email';
//     res.redirect('https://accounts.spotify.com/authorize' +
//       '?response_type=code' +
//       '&client_id=' + "9603daa58de14596a5a42fdbd2280c54" +
//       (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
//       '&redirect_uri=' + encodeURIComponent('http://localhost:3000'));
//     });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/index.html"));
});

const port = 3000;

app.listen(port, () =>{
    console.log(`Server is running in port: ${port}`);
})