const express = require('express')
const router = express.Router()
const controller = require('../controller/controllerBook')

router.get('/', controller.getAllBooks)
router.get('/:id', controller.findOneBook)
router.post('/', controller.insertBook)
router.delete('/:id', controller.deleteBook)
router.put('/:id', controller.UpdateBook)

module.exports = router;