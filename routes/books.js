const express = require('express');
const router = express.Router();
const Book = require('../controllers/books')
// const db = "mongodb://127.0.0.1:27017/mongoose-library"


router.post('/', Book.create)

router.get('/', Book.findAll)

router.put('/:id', Book.update)

router.delete('/:id', Book.delete)

module.exports = router;