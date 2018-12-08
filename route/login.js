var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('login.html', {
        sess: {}
    });
});

router.get('/logout', function (req, res) {
    const sess = req.session;
    if(sess.user_id) {
        sess.destroy(function (err) {
            if (err) {
                res.redirect('/');
            } else {
                res.redirect('/');
            }
        });
    } else {
        res.redirect('/');
    }
});


module.exports = router;