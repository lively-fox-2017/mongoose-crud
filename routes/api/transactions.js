const express = require('express');
const router = express.Router();

const TransactionController = require('../../controllers/TransactionController');

// GET /api/transactions
router.get('/', TransactionController.all);

// GET /api/transactions/:id
router.get('/:id', TransactionController.getById);

// POST /api/transactions
router.post('/', TransactionController.new);

// PATCH /api/transactions/:id
router.patch('/:id', TransactionController.finishById);

// DELETE /api/transactions
router.delete('/:id', TransactionController.deleteById);

module.exports = router;
