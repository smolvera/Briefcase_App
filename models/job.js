var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

// model of user who has login in successfully
    var AddNewJob = sequelize.define("addNewJob", {
        jobTitle: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        companyName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contactPerson: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        contactNumber: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        currentStatus: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        salary: {
            type: Sequelize.SMALLINT,
            allowNull: false,
        },
    });
    console.log(AddNewJob)

    AddNewJob.associate = function(models) {
        // link the new job to the registered user
        AddNewJob.belongsTo(models.NewUser, {
            onDelete: "cascade",
            foreignKey: {
                allowNull: false
            }
        });
    };

    // return addNewJob;
    AddNewJob.sync();

module.exports = AddNewJob;
