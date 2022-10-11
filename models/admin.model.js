const {sequelize, DataTypes} = require('../config/db.js');

const Admin = sequelize.define("admins", {
   
});

module.exports = {
   sequelize,
   Admin,
   DataTypes
}