const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

//pull out the 'users' model from mongoose
//'users' is the mongo collection
//now 'User' is an object that has all properties defined in User.js
const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    //callback function
    (accessToken, refreshToken, profile, done) => {
      new User({ googleId: profile.id }).save();
    }
  )
);
