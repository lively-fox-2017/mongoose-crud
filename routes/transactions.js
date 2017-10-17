const express = require('express');
const router = express.Router();
const Transaction = require('../controllers/transactions')

router.post('/', Transaction.create)

router.get('/', Transaction.findAll)

router.put('/:id', Transaction.update)

router.delete('/:id', Transaction.delete)

module.exports = router;