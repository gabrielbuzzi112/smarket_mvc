const {sequelize, DataTypes, Cliente} = require('../models/clientes.model.js');

const listar = (req, res) => {
    sequelize.sync().then(() => {
        Cliente.findAll().then(result => {
            res.send(JSON.stringify(result));
        }).catch((error) => {
            res.send('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        res.send('Unable to create table : ', error);
    });
}

const criar = (req, res) => {
    sequelize.sync().then(() => {
        Cliente.create({
            nome: req.body.nome
         }).then(() => {
            res.send(`Cliente ${req.body.nome} inserido na tabela Clientes!`);
         }).catch((error) => {
            res.send(String('Failed to create a new record : ', error));
         });
     }).catch((error) => {
        res.send('Unable to create table : ', error);
     });
}

const atualizar = (req, res) => {
    sequelize.sync().then(() => {
        Cliente.update(
            {
                nome: req.body.nome
            },
            {
                where: {id: req.body.id}
            }   
        ).then(() => {
            res.send(`Cliente ${req.body.id} atualizado!`);
        }).catch((error) => {
            res.send('Failed to update record : ', error);
        });
    }).catch((error) => {
        res.send('Unable to create table : ', error);
    });
}

const remover = (req, res) => {
    sequelize.sync().then(() => {
        Cliente.destroy({
            where: {
              id: req.body.id
            }
        }).then(() => {
            res.send(`Cliente ${req.body.id} removido!`);
        }).catch((error) => {
            res.send('Failed to delete record : ', error);
        });
      
      }).catch((error) => {
        res.send('Unable to create table : ', error);
      });
}

const buscar = (req, res) => {
    sequelize.sync().then(() => {
        Cliente.findOne({
            where: {
                id : req.params.id
            }
        }).then(result => {
            res.send(JSON.stringify(result));
        }).catch((error) => {
            res.send('Failed to retrieve data : ', error);
        });
    
    }).catch((error) => {
        res.send('Unable to create table : ', error);
    });
}

module.exports = {
    listar,
    criar,
    atualizar,
    remover,
    buscar
}