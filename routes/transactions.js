const express = require('express')
const router = express.Router()
const Transaction = require('../controllers/transactions')

router.get('/', Transaction.findData)

router.post('/', Transaction.createData)
//
router.delete('/:id', Transaction.deleteData)
//
router.put('/:id', Transaction.updateData)

module.exports = router;
