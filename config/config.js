var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config/config.json', 'utf8'));
module.exports = config;