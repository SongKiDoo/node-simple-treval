var express = require('express');
var router = express.Router();
var db_module = require('../database/database');

router.get('/', function (req, res) {
    var database = db_module.database;

    res.render('sample.html', {
        title: ""
    });
});


module.exports = router;