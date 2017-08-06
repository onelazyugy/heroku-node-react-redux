//no es2015 for nodejs, but nodejs is using commonjs module
const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/key");

const app = express();

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    //callback function
    (accessToken, refreshToken, profile, done) => {
      console.log('acess token', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile:', profile);
    }
  )
);

//route handler
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

//send the code back to google in exchange for email and user profile
app.get("/auth/google/callback", passport.authenticate("google"));

//dynamically which port listen to
//env variable, if undefined, use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
