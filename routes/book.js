const express = require('express')
const router = express.Router()
const bookController = require('../controllers/bookController')

router.get('/', bookController.all)
router.post('/', bookController.create)
router.put('/:id', bookController.update)
router.delete('/:id', bookController.delete)


module.exports = router
