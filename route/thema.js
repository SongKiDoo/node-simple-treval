var express = require('express');
var router = express.Router();
let models = require('../models/database');

router.get('/', function (req, res) {
    const sess = req.session;

    const customQuery = { theme_id : id };

    models.travel_place.findAll({where : customQuery}).then(function (result) {
        res.render('thema.html', {
            sess: sess,
            themeList: result
        });
    });
});


module.exports = router;