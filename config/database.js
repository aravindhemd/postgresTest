const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    'test',
    'root',
    'Tamil@12345',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );

module.exports = sequelize;