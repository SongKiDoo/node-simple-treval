var express = require('express');
var router = express.Router();
var crypto = require('crypto');

let models = require('../models/database');


// console.log(models);
router.get('/', function (req, res) {
});

// 중복체크
router.post('/register_check', function (req, res) {
    console.log(req);

    const userID = req.body.userID;


    models.users.findOne({where: {id: userID}}).then(function (results) {
        res.json(results);
    }).catch(err => {
        console.error(err);
    });
});

// 회원가입
router.post('/register', function (req, res) {

    const userID = req.body.userID;
    const password  = req.body.userPassword;
    const userEmail = req.body.userEmail;
    const userName = req.body.userName;

    console.log(userID, password)
    const hash_password = crypto.createHash('md5').update(password).digest("hex");

    models.users.create({id: userID, password: hash_password, email: userEmail, user_name: userName})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            console.error(err);
        });
});


module.exports = router;