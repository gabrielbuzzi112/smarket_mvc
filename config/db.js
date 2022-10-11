const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
   'smarket',
   'root',
   '',
    {
      host: 'localhost',
      dialect: 'mariadb'
    }
  );

sequelize.authenticate().then(() => {
   console.log('Connection has been established successfully.');
}).catch((error) => {
   console.error('Unable to connect to the database: ', error);
});

module.exports = {
    sequelize,
    DataTypes
}