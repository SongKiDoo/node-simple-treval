var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const sess = req.session;

    res.render('course.html', {
        sess: sess
    });
});


module.exports = router;