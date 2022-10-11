const { INTEGER } = require('sequelize');
const {sequelize, DataTypes} = require('../config/db.js');

const Lista_Produto = sequelize.define("lista_produto", {
    quantidade: {
        type: DataTypes.SMALLINT,
        allowNull: false
    }
});

module.exports = {
   sequelize,
   Lista_Produto,
   DataTypes
}