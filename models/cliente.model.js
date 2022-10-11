const {sequelize, DataTypes} = require('../config/db.js');

const Cliente = sequelize.define("clientes", {
   cpf: {
     type: DataTypes.INTEGER({length: 11}),
     allowNull: false
   },
   cidade: {
      type: DataTypes.STRING,
      allowNull: false
   }
});

module.exports = {
   sequelize,
   Cliente,
   DataTypes
}