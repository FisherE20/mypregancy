// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
    app.get("/", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        }
        res.render("home")
    });

    app.get("/signin", (req, res) => {
        // If the user already has an account send them to the members page
        if (req.user) {
            res.redirect("/home");
        }
        res.render("signin", );
    });

    // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/home", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "/signin"));
  });


}; 