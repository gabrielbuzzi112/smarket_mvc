const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    if(req.query.fail) {
        res.render('../views/login.pug', {mensagem: "Usuário e/ou senha inválidos!"});
    }
    else {
        res.render('../views/login.pug', {mensagem: ""});
    }
})

router.post('/', passport.authenticate('local', {
    successRedirect: 'clientes',
    failureRedirect: 'login?fail=true'
}))

module.exports = router;