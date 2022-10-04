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

sequelize.sync().then(() => {
   console.log('Tabela de usuarios criada com sucesso!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = {
   sequelize,
   Usuario,
   DataTypes
}