'use strict';
const express = require('express');
const router = express.Router();
const controllerTransactions = require('../controllers/transactions');

router.get('/', controllerTransactions.getAll);
router.post('/borrow/:memberid', controllerTransactions.borrowBook);
router.post('/return/:memberid', controllerTransactions.returnBook);
router.delete('/:id', controllerTransactions.deleteById);


module.exports = router;
