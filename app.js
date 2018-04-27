var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var logger = require('morgan');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("hdhdhd"));
app.use(session({
  secret: 'hdhdhd',
  resave: false,
  saveUninitialized: true,
  expires: 60 * 60 * 1000, //过期时间1小时
}))



//静态文件服务
app.use(express.static(path.join(__dirname, 'web')));
app.use('/img',express.static(path.join(__dirname, 'web/static/img')));

//cors，资源共享
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8083');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);


//默认跳到首页
app.get('/',function(req,res) {
	res.redirect(302, '/index.html') //相对当前url的根
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	res.redirect(302, '/noPage.html') //相对当前url的根
});

module.exports = app;
