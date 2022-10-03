const {sequelize, DataTypes} = require('../config/db.js');

const Cliente = sequelize.define("cliente", {
   nome: {
     type: DataTypes.STRING,
     allowNull: false
   }
});

sequelize.sync().then(() => {
   console.log('Book table created successfully!');
}).catch((error) => {
   console.error('Unable to create table : ', error);
});

module.exports = {
   sequelize,
   Cliente,
   DataTypes
}