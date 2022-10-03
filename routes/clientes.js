const express = require('express');
const router = express.Router();

const {sequelize, DataTypes, Cliente} = require('../models/clientes.model.js');

router.route('/')
    .get((req, res) => {
        sequelize.sync().then(() => {
            Cliente.findAll().then(result => {
                res.send(JSON.stringify(result));
            }).catch((error) => {
                res.send('Failed to retrieve data : ', error);
            });
        
        }).catch((error) => {
            res.send('Unable to create table : ', error);
        });
    })
    .post((req, res) => {
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
    })
    .put((req, res) => {
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
    })
    .delete((req, res) => {
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
    });

router.route('/:id')
    .get((req, res) => {
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
    });

router.route('/view/lista')
    .get((req, res) => {
        sequelize.sync().then(() => {
            Cliente.findAll().then(result => {
                let data = JSON.parse(JSON.stringify(result));
                res.render('../views/cliente/listar.pug', {data});
            }).catch((error) => {
                res.send('Failed to retrieve data : ', error);
            });
         
        }).catch((error) => {
            res.send('Unable to create table : ', error);
        });
    });

module.exports = router;