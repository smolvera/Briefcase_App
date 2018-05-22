// Dependencies 
var path = require("path");

module.exports = function(app) {
// Gets root or index.html route if 
app.get('/', function (req, res) {
    res.sendFile(__dirname, "../public/index.html")
  });
   
  // Gets route for registeration page
  app.get("/register", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/register.html"));
  });
  
  // Gets route for login page
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });
  
  // Gets route for forgot password page
  app.get("/forgot-password", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/forgot-password.html"));
  });
  
  // gets route for learn more page
  app.get("/learn_more", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/learn_more.html"));
  });

//   Check these routes for functionality and module exports
//   gets route for dashboard page
app.get("/dashboard", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/dashboard.html"));
  });

//   gets route for the add jobs page
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/tables.html"));
  });

//   gets route for the map page
app.get("/maps", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/maps.html"));
  });

}