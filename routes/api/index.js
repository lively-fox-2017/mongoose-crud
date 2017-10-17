const express = require('express');
const router = express.Router();

const books = require('./books');
const customers = require('./customers');

// /books
router.use('/books', books);

// /customers
router.use('/customers', customers);

// GET /api
router.get('/', (req, res) => {

  res.status(200).json({
    message: 'api index'
  })

});

module.exports = router;
