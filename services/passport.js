const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//pull out the 'users' model from mongoose
//'users' is the mongo collection
//now 'User' is an object that has all properties defined in User.js
const User = mongoose.model("users");

//put into cookie
passport.serializeUser((user, done) => {
  done(null, user.id); //user.id is the mongo record id (_id.$oid can be use as just 'id')
});

//get the user from id and turn into a user instance
passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    //callback function
    (accessToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then(existingUser => {
        if (existingUser) {
          //we already have a record with given profile id
          done(null, existingUser);
        } else {
          //we dont' have a user record with this id, make a new record
          new User({ googleId: profile.id })
            .save()
            .then(user => done(null, user)); //user is the user who was just saved
        }
      });
    }
  )
);
