const express = require('express');
const router = express.Router();
const transactions = require('../controllers/transactions');

router.get('/', transactions.findAll)
router.post('/', transactions.create)
router.put('/:id', transactions.update)
router.delete('/:id', transactions.delete)

module.exports = router;
