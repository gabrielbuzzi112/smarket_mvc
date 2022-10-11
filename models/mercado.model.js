const {sequelize, DataTypes} = require('../config/db.js');

const {Usuario} = require('./usuario.model');

const Mercado = sequelize.define("mercados", {
    cnpj: {
        type: DataTypes.INTEGER({length: 14}),
        allowNull: false
    },
    cidade: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = {
   sequelize,
   Mercado,
   DataTypes
}