const express = require('express');
const spotifyWebApi = require('spotify-web-api-node');

const app = express();

app.post('/login', function(req, res) => {
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
        redirectUri: 'http://localhost:3000',
        clientId: '3988a6fb6c2f4fb6966cefe1e70f339c',
        clientSecret: '0216ebf9c04f4b8da67a92aabc6ce44b'
    })
 spotifyApi
    .authorizationCodeGrant(code)
    .then(data => {
    res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
    })
 })
    .catch(() => {
        res.sendStatus(400)
    })
})
