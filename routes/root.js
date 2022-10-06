const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('^/$|/index(.html)?', (req, res) => {
    res.render('index.pug');
});
router.get('/logo', (req, res) => {
    var img = fs.readFileSync(path.join(__dirname, '../public/img/logo2.jpg'));
    res.writeHead(200, {'Content-Type': 'image/gif' });
    res.end(img, 'binary');
});

module.exports = router;