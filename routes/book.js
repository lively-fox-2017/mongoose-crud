const express = require('express')
const router = express.Router();
const book = require('../controller/book')

router.get('/',book.findAll)
router.post('/',book.create)
router.put('/:id',book.update)
router.delete('/:id',book.delete)

module.exports = router
