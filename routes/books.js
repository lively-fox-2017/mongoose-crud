const express = require('express')
const router = express.Router()
const Book = require('../controllers/books')

router.get('/', Book.findData)

router.post('/', Book.createData)
//
router.delete('/:id', Book.deleteData)
//
router.put('/:id', Book.updateData)

module.exports = router;
