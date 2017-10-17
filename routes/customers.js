const express = require('express')
const router = express.Router()
const controller = require('../controllers/customers')
router.get('/', controller.findAll)
router.get('/:id', controller.findById)
router.post('/', controller.add)
router.put('/:id', controller.edit)
router.delete('/:id', controller.delete)
module.exports = router