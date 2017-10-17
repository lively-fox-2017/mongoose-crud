var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var index = require('./routes/index');
var users = require('./routes/users');
var book = require('./routes/book')
var customer = require('./routes/customer')
var transaction = require('./routes/transaction')

var app = express();
mongoose.connect('mongodb://localhost/belajarMongooseCrud', (err) => {
  if(err) {
    console.log('database Belum CONECT MASE....');
  } else {
    console.log('----->>> alhamdulillah konek mas !!!');
  }
});

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
app.use('/users', users);
app.use('/book', book)
app.use('/customer', customer)
app.use('/transaction', transaction)



module.exports = app;
