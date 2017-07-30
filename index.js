//no es2015 for nodejs, but nodejs is using commonjs module
const express = require("express");
const app = express();

//route handler
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

//dynamically which port listen to
//env variable, if undefined, use port 5000
const PORT = process.env.PORT || 5000; 
app.listen(PORT);