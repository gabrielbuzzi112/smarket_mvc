const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const {sequelize, DataTypes, Usuario} = require('../models/usuarios.model.js');

router.route('/')
    .get((req, res) => {
        res.render('../views/cadastro.pug', {mensagem: ""});
    })
    .post((req, res) => {
        sequelize.sync().then(() => {
            Usuario.create({
                nome: req.body.nome,
                email: req.body.email,
                senha: bcrypt.hashSync(req.body.senha)
            }).then(() => {
               res.render('../views/cadastro.pug', {mensagem: `Enviamos um link para o email ${req.body.email}, clique nele para finalizar seu cadastro!`})
            }).catch((error) => {
               res.send('Failed to create a new record : ', error);
            });
         }).catch((error) => {
            res.send('Unable to create table : ', error);
         });
    });

module.exports = router;