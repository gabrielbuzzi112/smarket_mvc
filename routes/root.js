const express = require('express');
const router = express.Router();
const path = require('path');

router.get('^/$|/index(.html)?', (req, res) => {
    res.render('index.pug', { title: 'Hey', message: 'Hello there!' });
});

module.exports = router;