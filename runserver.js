
// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');
var path = require('path');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var static = require('serve-static');
var errorHandler = require('errorhandler');

// 에러 핸들러 모듈 사용
var expressErrorHandler = require('express-error-handler');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

var fs = require('fs');
var config = JSON.parse(fs.readFileSync('config.json', 'utf8'));


// 익스프레스 객체 생성
var app = express();


// DB
var db_module = require('./database/database.js');

// 라우터
var router_main = require('./route/main.js');

// 기본 속성 설정
app.set('port', process.env.PORT || 20100);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

// public 폴더를 static으로 오픈
// app.use('/public', static(path.join(__dirname, 'static/template')));

// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
    secret: config.appKey,
    resave:true,
    saveUninitialized:true
}));

app.set('views', __dirname + '/static/template');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use('/', router_main);




// 데이터베이스 객체를 위한 변수 선언
// var database = db_module.database;


//===== 라우팅 함수 등록 =====//

// 라우터 객체 참조
var router = express.Router();


// 404 에러 페이지 처리
var errorHandler = expressErrorHandler({
    static: {
        '404': './static/template/404.html'
    }
});

app.use( expressErrorHandler.httpError(404) );
app.use( errorHandler );


//===== 서버 시작 =====//

// 프로세스 종료 시에 데이터베이스 연결 해제
process.on('SIGTERM', function () {
    console.log("프로세스가 종료됩니다.");
    app.close();
});

app.on('close', function () {
    console.log("Express 서버 객체가 종료됩니다.");
    // if (database) {
    //     database.close();
    // }
});

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));

    // db_module.connectDB();

});

