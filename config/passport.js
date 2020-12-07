const passport = require('passport');
const User = require('../models/user');

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

// configure passport
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb){
    // used logged in
    // - Check if user exists in the database
    User.findOne({googleId: profile.id}, function(err, user){
        // - if theres an error, we handle it
        if(err) return cb(err);
    // - If user exists log them in
    if(user){
        return cb(null, user); // user will be logged in to the app
    } else { // if not, create new user and log them in
        const newUser = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            avatarURL: profile._json.picture
        });

        newUser.save(function(err){
            if(err) return cb(err);
            return cb(null, newUser);
        })
    }
    })
}));

passport.serializeUser(function(user, done){
    done(null, user.id)
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    })
});