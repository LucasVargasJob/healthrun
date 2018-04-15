'use strict';


// importing modules
let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

// import route and middleware
let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let genericMiddlware = require("./middlewares/generic-middleware");

// start express app
let app = express();


///////////////////////
// VIEW SETUP ENGINE //
//////////////////////

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

////////////////////////

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

////////////
// ROUTES //
////////////

app.use('/', indexRouter);
app.use('/users', usersRouter);

////////////////
// middlewares //
////////////////

app.use(genericMiddlware);

app.use(function(request, response, next) {
    // catch 404 and forward to error handler
    next(createError(404));
});

app.use(function(error, request, response, next) {
    // error handler

    // set locals, only providing error in development
    response.locals.message = error.message;
    response.locals.error = request.app.get('env') === 'development' ? error : {};

    // render the error page
    response.status(error.status || 500);
    response.render('error'); // not executed case it is not error
});


module.exports = app;
