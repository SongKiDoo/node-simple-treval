"use strict";

var fs        = require("fs");
var path      = require("path");
var Sequelize = require("sequelize");
// var env       = process.env.NODE_ENV || "development";
var env       = "development";
var config    = require('../config/config')['dbConfig'][env];
var sequelize = new Sequelize(config.database, config.username, config.password, config);
var db        = {};

var SequelizeAuto = require('sequelize-auto');
var auto = new SequelizeAuto(config.database, config.username, config.password, config.dbCodeGen);

auto.run(function (err) {
    if (err) throw err;
});


fs.readdirSync(__dirname).filter(function(file) {
        return (file.indexOf(".") !== 0) && (file !== "database.js");
    })
    .forEach(function(file) {
        var model = sequelize.import(path.join(__dirname, file));
        db[model.name] = model;
    });

Object.keys(db).forEach(function(modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;


module.exports = db;