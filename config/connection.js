
// Creating a connection between Sequelize and MySQL

var Sequelize = require("sequelize");
  // database name, SQL user name, SQL password
  if (process.env.JAWSDB_URL) {
    var sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize('database name', 'root', 'password', {
      host: 'localhost',
      dialect: 'mysql',
      port: 'port'
    })
  };

  
  module.exports = sequelize;
