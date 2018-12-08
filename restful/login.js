var express = require('express');
var router = express.Router();
var crypto = require('crypto');

let models = require('../models/database');

router.get('/', function (req, res) {

});

router.post('/', function (req, res) {
    console.log(req.body)
    const userID = req.body.userID;
    const password = req.body.userPassword;
    const hash_password = crypto.createHash('md5').update(password).digest("hex");
    console.log(hash_password )
    models.users.findOne({where: {id: userID, password: hash_password}}).then(function (results) {
        res.json(results);
    }).catch(err => {
        console.error(err);
    });
});



module.exports = router;