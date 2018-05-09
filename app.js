var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session')
var logger = require('morgan');
var RedisStore = require('connect-redis')(session);
var mime = require('mime-types')

var indexRouter = require('./routes/index');
var registerRouter = require('./routes/register');
var loginRouter = require('./routes/login');
//var loginRouter_api = require('./routes/api/login');


var articleRouter = require('./routes/manage/article');
var userRouter = require('./routes/manage/user');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser("hdhdhd"));
// app.use(session({
//   secret: 'hdhdhd',
//   resave: false,
//   saveUninitialized: true,
//   expires: 60 * 60 * 1000, //过期时间1小时
// }))


app.use(session({
    secret:'hdhdhd',
    resave: false,
    saveUninitialized: true,
    expires: 60 * 60 * 1000, //过期时间1小时
    store:new RedisStore({
        host:'127.0.0.1',
        port:'6379',
        ttl: 60 * 60 * 1000,
        //db:'mydb'  //此属性可选。redis可以进行分库操作。若无此参数，则不进行分库
    })
}));



//默认跳到首页
// app.get('/',function(req,res) {
//     if(req.protocol === 'https') {  
//        res.redirect(302, '/index.html') //相对当前url的根
//     }  
//     else {  
//        res.redirect(302, 'https://iamabj.club/index.html')
//     }  
// })

//静态文件服务//默认会去找index.html文件,若找不到，则到下一个static找，否则不处理
app.use(express.static(path.join(__dirname, 'web')));
app.use('/img',express.static(path.join(__dirname, 'web/static/img')));


//cors，资源共享
var allowCrossDomain = function(req, res, next) {
    //res.header('Access-Control-Allow-Origin', 'https://iamabj.club');
    res.header('Access-Control-Allow-Origin', 'http://localhost:8888');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Credentials','true');
    next();
};
app.use(allowCrossDomain);


// app.use('/', indexRouter);
// app.use('/login', function(req, res, next) {
//   if(req.hostname=="api.iamabj.club"){
//      app.use('/api/login',loginRouter_api)
//   }
//   else if(req.hostname=="m.iamabj.club"){
//     app.use('/login',loginRouter)
//   }
//   console.log("123333333",req.hostname)
// });

app.use('/admin/login',loginRouter)

app.use('/register', registerRouter);

app.use('/admin/manage', articleRouter);
app.use('/admin/manage/article', articleRouter);
app.use('/admin/manage/user', userRouter);


//上传图片begin
var multer = require('multer')
const storage = multer.diskStorage({
  //上传图片的路径，是在你的静态目录下（public）uploads会自动进行创建
    destination: './web/static/img/upload',
  //给上传文件重命名，获取添加后缀名
    filename: function(req, file, callback){
         var ext=mime.extension(file.mimetype)
         //var fileFormat = (file.originalname).split(".");
         callback(null, Date.now() + "." + ext);
    }
})

var upload = multer({storage})

app.post('/upload', upload.single('artifile'), function(req, res, next) {
  console.log("file=",req.file)
  console.log("body=",req.body)
  res.json({name:req.file.filename})
})

//上传图片end

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  //res.send(err)
	res.redirect(302, '/admin/index.html') //找不到页面就跳转到首页
});

module.exports = app;
