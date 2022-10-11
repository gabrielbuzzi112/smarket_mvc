const { INTEGER } = require('sequelize');
const {sequelize, DataTypes} = require('../config/db.js');

const Estoque_Produto = sequelize.define("estoque_produto", {
    quantidade: {
        type: DataTypes.SMALLINT,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
});

module.exports = {
   sequelize,
   Estoque_Produto,
   DataTypes
}