const {sequelize, DataTypes} = require('../config/db.js');

const {Usuario} = require('./usuarios.model');

const Cliente = sequelize.define("clientes", {
   endereco: {
     type: DataTypes.STRING,
     allowNull: false
   }
}).belongsTo(Usuario);

sequelize.sync().then(() => {
   console.log('Tabela de cleintes criada com sucesso!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = {
   sequelize,
   Cliente,
   DataTypes
}