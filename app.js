var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var news = require('./routes/news');
var cars = require('./routes/cars');
var parts = require('./routes/parts');
var infos = require('./routes/infos');
var companies = require('./routes/companies');
var enterprise = require('./routes/enterprise');
var domain = require('./routes/domain');

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
app.use(['/news','/news.html'], news);
app.use(['/cars','/carresult.html'], cars);
app.use(['/parts','/partsresult.html'], parts);
app.use(['/infos','/needmsg.html'], infos);
app.use(['/companies','/enterprise.html'], companies);
app.use('/enterprise', enterprise);
app.use('/domain', domain);

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