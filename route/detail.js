var express = require('express');
var router = express.Router();
let models = require('../models/database');

router.get('/:id', function (req, res) {
    const sess = req.session;

    const id = req.params.id;
    const type = req.query.type;
    const customQuery = type === 'theme' ? { theme_id : id } : { course_id : id };

    const infoQuery = type === 'theme' ? themeSelect : courceSelect;

    infoQuery(customQuery).then(function (infoObj) {
        models.travel_place.findAll({where : customQuery}).then(function (result) {
            res.render('detail.html', {
                infoObject: infoObj,
                detailList: result,
                sess : sess
            })
        }).catch(err => {
            console.error(err);
        });
    });


});


const themeSelect = function(whereQuery) {
    return models.travel_theme.findOne(whereQuery);
};

const courceSelect = function(whereQuery) {
    return models.travel_cource.findOne(whereQuery);
};


module.exports = router;