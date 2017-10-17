const express = require('express');
const router = express.Router();
const TransactionController = require('./../../controllers/transaction');

// find all
router.get('/', TransactionController.findAll)

// find one
router.get('/:id', TransactionController.findOne)

// create
router.post('/', TransactionController.create)

// update
router.put('/:id', TransactionController.update)

// delete
router.delete('/:id', TransactionController.delete)

module.exports = router;