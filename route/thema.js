var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    const sess = req.session;

    res.render('thema.html', {
        sess: sess
    });
});


module.exports = router;