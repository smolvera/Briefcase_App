
// Creating a connection between Sequelize and MySQL

var Sequelize = require("sequelize");
  // database name, SQL user name, SQL password
  if (process.env.JAWSDB_URL) {
    var sequelize = new Sequelize(process.env.JAWSDB_URL);
  } else {
    sequelize = new Sequelize('briefcase_db', 'root', 'Malaya10@', {
      host: 'localhost',
      dialect: 'mysql',
      port: '3306'
    })
  };

  
  module.exports = sequelize;
