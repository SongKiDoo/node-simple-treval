var express = require('express');
var router = express.Router();
let models = require('../models/database');

router.get('/:id', function (req, res) {

    const id = req.param.id;
    const type = req.query.type;
    const customQuery = type === 'theme' ? { theme_id : id } : { course_id : id };

    models.travel_place.findAll({where : customQuery}).then(function (result) {
        res.render('detail.html', {
            detailList: result
        }).catch(err => {
            console.error(err);
        });
    });
});


module.exports = router;