// Dependencies
// var db = require("../models");
// var sequelize = require("sequelize");
// var Sequelize = require("sequelize");
var NewUser = require("../models/registration.js");

module.exports = function(app) {

  app.get("/api/newUser", function(req, res) {
    NewUser.findAll({}).then(function(results) {
      res.json(results);
    });
    console.log(results);
    console.log(NewUser);
  });
  // gets newUser 
  // app.get("/api/newUser", function(req, res) {
  //   // Here we add an "include" property to our options in our findAll query
  //   // We set the value to an array of the models we want to include in a left outer join
  //   // In this case, just db.Post
  //   db.newUser.findAll({
  //     include: [db.newUser]
  //   }).then(function(dbnewUser) {
  //     res.json(dbnewUser);
  //   });
  // });

// adds new User from registration
 app.post("/api/newUser", function(req, res) {
  
  console.log("newUser data: ");
  console.log(req.body)
  
  // creates new user
  NewUser.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
  })
  });

  

}