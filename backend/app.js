var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

const db = require('./utils/db.js');
const User = require('./utils/user.js')

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function (req, res, next) {
  req.db = db;
  next()
})

app.use(async (req, res, next) => {
  const user = new User();
  await user.init(req.cookies);

  req.user = user;
  next();
})

app.use('/api/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus('404');
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.sendStatus(err.status || 500);
});

module.exports = app;
