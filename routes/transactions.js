const express = require('express');
const router = express.Router();
const Transaction = require('../controllers/transactionCtrl');

router.get('/', Transaction.getTransactions);
router.get('/:transactionId', Transaction.getTransaction);
router.post('/', Transaction.createTransaction);
router.delete('/:memberid', Transaction.deleteTransaction);
router.put('/:transactionId', Transaction.updateTransaction);

module.exports = router;
