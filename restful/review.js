var express = require('express');
var router = express.Router();
var crypto = require("crypto");

let models = require('../models/database');

router.get('/:tableId', function (req, res) {
    const table_name = req.query.tableName;
    const table_key_id = req.param.tableId;

    models.review_comment.belongsTo(models.users, {foreignKey: 'user_id'});
    models.review_comment.find({where: {table_name: table_name, table_key_id: table_key_id, include:[models.users]}}).then(function (result) {
        res.json(results);
    }).catch(err => {
        console.error(err);
    });
});

// 리뷰 등록
router.post('/:tableId', function (req, res) {
    const table_name = req.body.tableName;
    const table_key_id = req.param.tableId;
    const sess = req.session;

    if(!sess) return res.json({'noLogin': true});
    const userID = sess.user_id;
    const comment_review = req.body.comment_review;
    const groupDisc = req.body.group_disc;

    var id = crypto.randomBytes(20).toString('hex');

    models.review_comment.create({
        comment_id: id, user_id: userID, table_name: table_name, table_key_id: table_key_id,
        comment_review: comment_review, group_disc : groupDisc, comment_disc : comment_disc
    }).then(result => {
        res.json(result);
    }).catch(err => {
        console.error(err);
    });
});


module.exports = router;