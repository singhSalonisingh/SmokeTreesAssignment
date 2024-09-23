const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./User');

const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
});

User.hasMany(Address);
Address.belongsTo(User);

module.exports = Address;
 
