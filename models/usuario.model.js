const {sequelize, DataTypes} = require('../config/db.js');

const Usuario = sequelize.define("usuarios", {
   nome: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false
   },
   senha: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

module.exports = {
   sequelize,
   Usuario,
   DataTypes
}