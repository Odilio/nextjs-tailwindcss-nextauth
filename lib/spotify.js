import SpotifyWebApi from 'spotify-web-api-node';

const scopes = [
    'user-read-private', 
    'user-read-email',
    'streaming',
    'user-library-read',
    'user-top-read',
    'user-follow-read'

].join(",");

const params = {
    scope: scopes,
},

queryParamString = new URLSearchParams(params);

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString.toString()}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEX_PUBLIC_CLIENT_ID, 
    clientSecret: process.env.NEX_PUBLIC_CLIENT_SECRET, 
});

export default spotifyApi;

export {LOGIN_URL}
