const express = require('express');
const router = express.Router();

const books = require('./books');

// /books
router.use('/books', books);

// GET /api
router.get('/', (req, res) => {

  res.status(200).json({
    message: 'api index'
  })

});

module.exports = router;
