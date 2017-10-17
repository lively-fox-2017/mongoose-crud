const express = require('express')
const router = express.Router();
const transaction = require('../controller/transaction')

router.get('/',transaction.findAll)
router.post('/',transaction.create)
router.put('/:id',transaction.update)
router.delete('/:id',transaction.delete)

module.exports = router
