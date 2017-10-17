const Book = require('./book');
const Customer = require('./customer');
const Transaction = require('./transaction');

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
mongoose.Promise = global.Promise;

module.exports = {Book, Customer};