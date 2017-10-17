'use strict';
const Book = require('./book');
const Transaction = require('./transaction');
const Customer = require('./customer');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookstore');
let db = mongoose.connection

let models={
  Book,
  Customer,
  Transaction
}


module.exports = models;
