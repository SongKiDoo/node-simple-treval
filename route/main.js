var express = require('express');
var router = express.Router();
var models = require('../models/database');
var jsonfiy = require('../seque-json');

router.get('/', function (req, res) {
    models.travel_theme.findAll().then(function (theme_res) {
        models.travel_cource.findAll().then(function (cource_res) {
            const sess = req.session;

            res.render('index.html', {
                theme_list : theme_res,
                cource_list : cource_res,
                sess : sess
            });
        }).catch(err => {
            console.error(err);
        });
    }).catch(err => {
        console.error(err);
    });
});


module.exports = router;