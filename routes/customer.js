const express = require('express')
const router = express.Router()
const customerController = require('../controllers/cutomerController')

router.get('/', customerController.all)
router.post('/', customerController.create)
router.put('/:id', customerController.update)
router.delete('/:id', customerController.deleteCustomer)

module.exports = router
