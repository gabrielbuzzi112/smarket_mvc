const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Clientes', 'login.html'));
});

router.get('/painel', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'Clientes', 'painel.html'));
});

module.exports = router;