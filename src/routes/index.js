const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // res.sendFile(path.join(__dirname, 'views/index.html'));
    res.render('index.html', {title: 'Desarrollando website con nodejs'})
});

router.get('/contact', (req, res) => {
    res.render('contact', {title: 'Contact View title'})
});

module.exports = router;