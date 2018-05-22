
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// model of a new user entering their data on the registration form

    var NewUser = sequelize.define("newUser", {
      firstName: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      lastName: {
          type: Sequelize.STRING,
          allowNull: false,
      }, 
      email: {
        type: Sequelize.STRING, 
        allowNull: false,
      }, 
      password: {
          type: Sequelize.STRING,
          allowNull: false,
      },
      confirmPassword: {
          type: Sequelize.STRING,
          allowNull: false,
    },
    
});
console.log(NewUser)


    NewUser.associate = function(models) {
        NewUser.hasMany(models.AddNewJob, {
            onDelete: "cascade"
        });
       
    }
    // return newUser;

    // Syncs with DB
    NewUser.sync();
    
    module.exports = NewUser;
  