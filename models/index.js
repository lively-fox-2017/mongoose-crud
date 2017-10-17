const Book = require('./book');
const Customer = require('./customer');
const Transaction = require('./transaction');

mongoose.connect('mongodb://localhost/library');

module.exports = {Book, Customer, Transaction};