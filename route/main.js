var express = require('express');
var router = express.Router();
var db_module = require('../models/database');

router.get('/', function (req, res) {
    var database = db_module.database;

    res.render('index.html', {
        title: ""
    });
});


module.exports = router;