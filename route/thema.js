var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {

    res.render('thema.html', {
        title: ""
    });
});


module.exports = router;