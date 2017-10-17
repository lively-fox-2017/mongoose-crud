const express = require('express');
const router = express.Router();
const books = require('./api/books');
const customers = require('./api/customers');

router.use('/books', books);
router.use('/customers', customers);

module.exports = router;