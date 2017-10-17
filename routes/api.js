const express = require('express');
const router = express.Router();
const books = require('./api/books');
const customers = require('./api/customers');
const transactions = require('./api/transactions');

router.use('/books', books);
router.use('/customers', customers);
router.use('/transactions', transactions);

module.exports = router;