var express = require("express");
var bodyParser = require("body-parser");
var env = require('dotenv').config();

// sets up express app
var app = express();
var PORT = process.env.PORT || 8080;

// throwing error (Cannot find module './models') need fixing
var db = require("./models");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/*+json' }))

// Static directory middleware that sends all public files
app.use(express.static("public"));

// Routes *throwing error- require is not a function -add additional routes here
require("./routes/registrationAPI.js")(app);
require("./routes/jobAPI.js")(app);
require("./routes/html-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
app.listen(PORT, function() {
  console.log("Your app is listening on PORT " + PORT);
})
// db.sequelize.sync({ force: true }).then(function() {
//     app.listen(PORT, function() {
//       console.log("App listening on PORT " + PORT);
//     });
//   });