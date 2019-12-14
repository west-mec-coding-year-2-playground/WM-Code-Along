var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

var indexRouter = require('./routes/index');
var starRouter = require('./routes/star');
var rickRouter = require('./routes/rick');
var pokemonRouter = require('./routes/poke');
app.use('/', indexRouter);
app.use('/star', starRouter);
app.use('/rick', rickRouter);
app.use('/poke', pokemonRouter);







const hbs = require('express-handlebars')({
  defaultLayout: "main",
  extname: '.hbs'
});
app.engine('hbs', hbs);
app.set('view engine', 'hbs');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Serve static content for the app from the "public" directory in the application directory.
// var favicon = require('serve-favicon');
// app.use(favicon(path.join(__dirname, 'public/assets/img', 'favicon.ico')));
app.use('/public', express.static('public'));
app.use('/img', express.static('public/img'));
app.use('/stylesheets', express.static('public/stylesheets'));
app.use('/css', express.static('public/css'));
app.use('/lib', express.static('public/lib'));
app.use('/js', express.static('public/js'));

// app.use(express.static(path.join(__dirname, 'public')));


// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


// Start the server and log the port
var PORT = 8000;
app.listen(process.env.PORT||PORT, () => {
console.log(`Server started on ${PORT}`);
});


module.exports = app;
