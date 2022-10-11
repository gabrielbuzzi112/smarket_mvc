const {sequelize, DataTypes} = require('../config/db.js');

const {Lista} = require('./lista.model');
const {Estoque} = require('./estoque.model');

const Produto = sequelize.define("produtos", {
   nome: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

module.exports = {
   sequelize,
   Produto,
   DataTypes
}