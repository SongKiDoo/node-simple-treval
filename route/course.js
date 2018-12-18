var express = require('express');
var router = express.Router();
let models = require('../models/database');

router.get('/', function (req, res) {
    const sess = req.session;

    models.travel_place.findAll().then(function (result) {
        return res.render('course.html', {
            sess: sess,
            courseList: result
        });
    });
});


module.exports = router;