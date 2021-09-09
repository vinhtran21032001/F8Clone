const express = require('express');
const route = express.Router();
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
var GoogleStrategy = require('passport-google-oauth20').Strategy;
passport.use(new FacebookStrategy({
    clientID : "583248952846393",
    clientSecret : "b8b24fb77ef86202dd5855545b54d7e6",
    callbackURL : "https://682c-2402-9d80-369-46ff-b8dc-3c0e-47f1-3a4c.ngrok.io/auth/facebook/callback",
    profileFields : ["displayName", "photos"]
}, (accessToken, refreshToken, profile, done)=>{
    console.log(profile)
    done(null,profile)
}
))
route.get('/facebook',passport.authenticate('facebook'));
route.get('/facebook/callback',passport.authenticate('facebook', {failureRedirect: '/login'}),
(req, res, next)=>{
    res.redirect('/')
    res.json(req.session.passport.user.displayName)
}
)


passport.use(new GoogleStrategy({
    clientID : "374647910697-iaeeik2narucfhqg7e68pkgkdp0l1e02.apps.googleusercontent.com",
    clientSecret : "ebtwX2szGEY8yNMvBGNpk6ur",
    callbackURL : "https://682c-2402-9d80-369-46ff-b8dc-3c0e-47f1-3a4c.ngrok.io/auth/google/callback",
}, (accessToken, refreshToken, profile, done)=> {
    done(null, profile)
} 
))



route.get('/google', passport.authenticate('google', {scope: ['email', 'profile']}));
route.get('/google/callback', passport.authenticate('google', {failureRedirect: '/login'}),
(req, res, next)=> {
    res.redirect('/')
}
);

module.exports = route;
