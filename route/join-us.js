var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    res.render('joinUs.html', {
        sess : {}
    });
});


module.exports = router;