const express = require('express');
const router = express.Router();
const passport = require('passport');
const {sequelize, DataTypes, Usuario} = require('../models/usuario.model.js');

router.route('/')
    .get((req, res) => {
        sequelize.sync().then(() => {
            Usuario.findAll().then(result => {
                let dados = JSON.parse(JSON.stringify(result));
                res.render('../views/cliente/index.pug', {clientes: dados});
            }).catch((error) => {
                res.send('Failed to retrieve data : ', error);
            });
        }).catch((error) => {
            res.send('Unable to create table : ', error);
        });
    });

/*
router.route('/')
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

*/

module.exports = router;