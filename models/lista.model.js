const { INTEGER } = require('sequelize');
const {sequelize, DataTypes} = require('../config/db.js');

const Lista = sequelize.define("listas", {
   nome: {
      type: DataTypes.STRING,
      allowNull: false
   } 
});

module.exports = {
   sequelize,
   Lista,
   DataTypes
}