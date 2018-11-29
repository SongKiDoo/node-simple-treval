
// Express 기본 모듈 불러오기
var express = require('express');
var http = require('http');

// Express의 미들웨어 불러오기
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// Session 미들웨어 불러오기
var expressSession = require('express-session');

// config 파일 불러오기(동기)
let config = require('./config/config');

// 익스프레스 객체 생성
var app = express();

// DB
var db_module = require('./models/database.js');
// 기본 속성 설정
app.set('port', process.env.PORT || 20100);

// body-parser를 이용해 application/x-www-form-urlencoded 파싱
app.use(bodyParser.urlencoded({ extended: false }));

// body-parser를 이용해 application/json 파싱
app.use(bodyParser.json());

// cookie-parser 설정
app.use(cookieParser());

// 세션 설정
app.use(expressSession({
    secret: config.appKey,
    resave:true,
    saveUninitialized:true
}));

// 라우팅 설정
const routeConfig = require('./route/__config__');
routeConfig(app);

//클라이언트에서 ajax로 요청 시 CORS(다중 서버 접속) 지원
var cors = require('cors');
app.use(cors());


//===== 서버 시작 =====//
// 프로세스 종료 시에 데이터베이스 연결 해제
process.on('SIGTERM', function () {
    console.log("프로세스가 종료됩니다.");
    app.close();
});

app.on('close', function () {
    console.log("Express 서버 객체가 종료됩니다.");
});

// Express 서버 시작
http.createServer(app).listen(app.get('port'), function(){
    console.log('서버가 시작되었습니다. 포트 : ' + app.get('port'));
});

