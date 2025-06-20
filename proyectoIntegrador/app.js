var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const registroRouter = require('./routes/registracion')
const productoRouter = require('./routes/producto')
const session = require('express-session');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({secret: "Secret", 
  resave: false, 
  saveUninitialized: true}));


  app.use(function(req, res, next){
    if(req.cookies.recordame != undefined && req.session.userLoggeado == undefined){
      req.session.userLoggeado = req.cookies.recordame;
    }
    return next();
  });

  app.use(function(req, res, next){
  if(req.session.userLoggeado != undefined){
    res.locals.userLoggeado = req.session.userLoggeado;
  }
  return next();
});


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/', registroRouter)

app.use('/producto', productoRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
