//no es2015 for nodejs, but nodejs is using commonjs module
const express = require("express");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

//route handler
app.get("/", (req, res) => {
  res.send({ hello: "Viet" });
});

//dynamically which port listen to
//env variable, if undefined, use port 5000
const PORT = process.env.PORT || 5000; 
app.listen(PORT);