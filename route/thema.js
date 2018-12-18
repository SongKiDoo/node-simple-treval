var express = require('express');
var router = express.Router();
let models = require('../models/database');

router.get('/', function (req, res) {
    const sess = req.session;

    // const customQuery = { where : {} };
    // if(req.params.theme_id) customQuery.where['theme_id'] = req.params.theme_id;

    models.travel_place.findAll().then(function (result) {
        res.render('thema.html', {
            sess: sess,
            themeList: result
        });
    });
});


module.exports = router;