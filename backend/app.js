require('dotenv').config()

var createError = require('http-errors');
var express = require('express');

var apiRouter = require('./routes/api');

const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

const auth_config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.AUTHSECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.AUTHCLIENT,
  issuerBaseURL: process.env.AUTHURL
};

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(auth(auth_config));

app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});

app.use('/api', requiresAuth(), apiRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
