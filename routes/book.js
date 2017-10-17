const express = require('express')
const router = express.Router()
const books=require('../controllers/book')

router.post('/book',books.insertBook)

router.get('/book',books.viewBook)

router.delete('/book/:id',books.deleteBook)

router.put('/book/:id',books.updateBook)

module.exports = router;
