var express = require('express');
var router = express.Router();
let models = require('../models/database');

router.get('/', function (req, res) {
    const sess = req.session;

    const customQuery = { course_id : id };

    models.travel_place.findAll({where : customQuery}).then(function (result) {
        return res.render('course.html', {
            sess: sess,
            courseList: result
        });
    });
});


module.exports = router;