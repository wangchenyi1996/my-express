/*
 * @Description: 
 * @Version: 1.0
 * @Autor: 王强
 * @Date: 2020-05-13 12:05:54
 * @LastEditors: 王强
 * @LastEditTime: 2020-07-08 10:24:35
 */ 
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require("cors");

var indexRouter = require('./routes/client/client.js');
var adminRouter = require('./routes/admin/admin.js');

var app = express();
// app.use(express.static('public'))

app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// 设置多个静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', indexRouter);
app.use('/admin', adminRouter);

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
