// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');
var static = require('serve-static');
var path = require('path');


let login = require('./login.js');
let main = require('./main.js');
let joinUs = require('./join-us.js');
let course = require('./course.js');
let thema = require('./thema.js');
let detail = require('./detail.js');

let apiLogin = require('../restful/login.js');
let apiJoinUs = require('../restful/join-us.js');
let apiReview = require('../restful/review.js');


let routeSetting = function (app) {

    // 템플릿 엔진 설정
    viewEenginSetting(app);
    // static 폴더 설정
    staticFolderSetting(app);
    // 사용자 라우팅 설정
    addResource(app);
    // API 설정
    addApiResource(app);
    // 에러페이지 설정
    errorPageSetting(app);
};

let viewEenginSetting = function (app) {
    app.set('views', __dirname + '/../static/template');
    app.set('view engine', 'ejs');
    app.engine('html', require('ejs').renderFile);
};

let errorPageSetting = function(app) {
    const errorHandler = expressErrorHandler({
        static: {
            '404': './static/template/404.html'
        }
    });
    app.use( expressErrorHandler.httpError(404) );
    app.use( errorHandler );
};

let staticFolderSetting = function(app) {
    app.use('/static', static(path.join(__dirname, '/../static')));
};

let addResource = function(app) {
    app.use('/', main);

    // 로그인, 회원가입
    app.use('/login', login);
    app.use('/join-us', joinUs);
    app.use('/course', course);
    app.use('/thema', thema);
    app.use('/detail', detail);
};

let addApiResource = function(app) {
    app.use('/api/login', apiLogin);
    app.use('/api/join-us', apiJoinUs);
    app.use('/api/review', apiReview);
};

module.exports = routeSetting;