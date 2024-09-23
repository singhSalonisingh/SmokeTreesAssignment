const { Sequelize } = require('sequelize');

// Connect to MySQL database
const sequelize = new Sequelize('user_address_db', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;
 
