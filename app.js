const createError = require('http-errors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');


const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const scheduleRouter = require('./routes/schedule');
const constructorRouter = require('./routes/constructor');
const driverRouter = require('./routes/driver');
const raceResultRouter = require('./routes/raceresult');
const qualifyingResultRouter = require('./routes/qualifyingresult');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

mongoose.connect('mongodb://localhost/Formula1', { useNewUrlParser: true });
mongoose.Promise = global.Promise;



app.use(logger('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/f1', scheduleRouter);
app.use('/f1/standings', constructorRouter);
app.use('/f1/standings', driverRouter);
app.use('/f1/results', qualifyingResultRouter);
app.use('/f1/results', raceResultRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

//error handler
app.use(function (err, req, res, next) {
  //console.log(err);
  res.status(422).send({error: err.message});
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