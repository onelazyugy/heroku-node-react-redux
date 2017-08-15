const passport = require("passport");

//export a function from this file
module.exports = (app) => {
  //route handler
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //send the code back to google in exchange for email and user profile
  app.get("/auth/google/callback", passport.authenticate("google"));

  app.get('/api/logout', (req, res) => {
    req.logout(); //logout() is attached to req by passport
    res.send(req.user);
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  })
};
