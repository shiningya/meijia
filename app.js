var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var aboutus = require('./routes/aboutus');
var course = require('./routes/course');
var team = require('./routes/team');
var state = require('./routes/state');
var contactus = require('./routes/contactus');
var apply = require('./routes/apply');

var indexM = require('./routes/mobile/index');
var aboutusM = require('./routes/mobile/aboutus');
var courseM = require('./routes/mobile/course');
var teamM = require('./routes/mobile/team');
var stateM = require('./routes/mobile/state');
var contactusM = require('./routes/mobile/contactus');
var applyM = require('./routes/mobile/apply');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/aboutus', aboutus);
app.use('/course', course);
app.use('/team', team);
app.use('/state', state);
app.use('/contactus', contactus);
app.use('/apply', apply);

app.use('/mobile/', indexM);
app.use('/mobile/aboutus', aboutusM);
app.use('/mobile/course', courseM);
app.use('/mobile/team', teamM);
app.use('/mobile/state', stateM);
app.use('/mobile/contactus', contactusM);
app.use('/mobile/apply', applyM);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
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