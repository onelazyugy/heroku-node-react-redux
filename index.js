//no es2015 for nodejs, but nodejs is using commonjs module
const express = require("express");
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/User');
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

//return a function and take that function and pass in the 'app' variable
require("./routes/authRoutes")(app);

//dynamically which port listen to
//env variable, if undefined, use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
