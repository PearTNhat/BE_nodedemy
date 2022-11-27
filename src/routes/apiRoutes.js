const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/', (req, res) => {
    res.send('user router');
});
router.post('/post', (req, res) => {
    console.log(req.body);
    res.send('user router post');
});
module.exports = router;
