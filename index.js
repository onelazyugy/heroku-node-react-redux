//no es2015 for nodejs, but nodejs is using commonjs module
const express = require("express");
require("./services/passport");

const app = express();

//return a function and take that function and pass in the 'app' variable
require("./routes/authRoutes")(app);

//dynamically which port listen to
//env variable, if undefined, use port 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
