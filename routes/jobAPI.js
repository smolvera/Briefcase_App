// Dependencies
var AddNewJob = require("../models/job.js");
var NewUser = require("../models/registration.js");

// this route function gets all the jobs added to the user's database
  module.exports = function(app) {
    //   this function will get all the added jobs
    app.get("/api/addNewJob", function(req, res) {

      var query = {};
    if (req.query.newUser_id) {
      query.NewUserId = req.query.newUser_id;
    }
        // Here we add an "include" property to our options in our findAll query
        // We set the value to an array of the models we want to include in a left outer join
    
        AddNewJob.findAll({
          where: query,
          include: (NewUser)
        //   not sure about dbnewUser
        }).then(function(dbAddNewJob) {
          res.json(dbAddNewJob);
        });
      });

    //   this route function gets a job by an id
      app.get("/api/addNewJob/:id", function(req, res) {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        
        AddNewJob.findOne({
          where: {
            id: req.params.id
          },
          include: [db.NewUser]
        }).then(function(dbAddNewJob) {
          res.json(dbAddNewJob);
        });
      });

    //   this section should 
    // POST route for saving a new job 9id of that job?
  app.post("/api/addNewJob", function(req, res) {
    console.log("addNewJob data: ");
    console.log(req.body);

    // stopped here
    AddNewJob.create({
      jobTitle: req.body.jobTitle,
      companyName: req.body.companyName,
      contactPerson: req.body.contactPerson,
      contactNumber: req.body.contactNumber,
      currentStatus: req.body.currentStatus,
      salary: req.body.salary     
  });
  console.log(dbAddNewJob);   
  })
  // DELETE route for deleting posts
  app.delete("/api/addNewJob/:id", function(req, res) {
    AddNewJob.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function(dbAddNewJob) {
        res.json(dbAddNewJob);
      });
  });

  // PUT route for updating posts
  app.put("/api/addNewJob", function(req, res) {
    AddNewJob.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbAddNewJob) {
      res.json(dbAddNewJob);
    });
  });

}