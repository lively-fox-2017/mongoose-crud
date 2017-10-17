const express = require('express')
const router = express.Router();
const controller = require('../controller/controllerTransaction')

router.get('/', controller.getAllTransaction)
router.get('/:id', controller.findOneTransaction)
router.post('/', controller.insertTransacktion)
router.delete('/:id', controller.deleteTransaction)
router.put('/:id', controller.updateTransaction)
router.post('/:id', controller.addBookTransaction)

module.exports = router