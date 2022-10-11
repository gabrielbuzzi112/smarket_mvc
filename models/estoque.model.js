const { INTEGER } = require('sequelize');
const {sequelize, DataTypes} = require('../config/db.js');

const Estoque = sequelize.define("estoques", {
   nome: {
      type: DataTypes.STRING,
      allowNull: false
   } 
});

module.exports = {
   sequelize,
   Estoque,
   DataTypes
}