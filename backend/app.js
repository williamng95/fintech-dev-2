require('dotenv').config()

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var apiRouter = require('./routes/api');

const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

const auth_config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTHSECRET,
  baseURL: 'http://localhost:3000',
  clientID: 'obOUznVsGE3nYOEiiop5t0xt352zeZQm',
  issuerBaseURL: 'https://dev-kj-18osw.us.auth0.com'
};

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(auth(auth_config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api',requiresAuth(), apiRouter);

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
