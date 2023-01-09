var createError = require('http-errors');
var express = require('express');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3000,
    database: 'testing',
    user: 'root',
    password: 'Mu@112001'
});
var database_connection_status = '';
connection.connect(function (error) {
    if (error) {
        database_connection_status = '<h3 class= "text-center text-danger ">MySQL Database Connection Error</h3>';

    }
    else {
        database_connection_status = '<h3 class="text-center text-success">Node JS Application Successfully connect to MySQL Database</h3>'
    }
});
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/users', usersRouter);

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
