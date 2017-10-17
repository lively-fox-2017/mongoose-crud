const express = require('express');
const router = express.Router();

const CustomerController = require('../../controllers/CustomerController');

// GET /api/customers
router.get('/', CustomerController.all);

// POST /api/customers
router.post('/', CustomerController.create);

// GET /api/customers/:id
router.get('/:id', CustomerController.getById);

// PUT /api/customers/:id
router.put('/:id', CustomerController.updateById);

// DELETE /api/customers/:id
router.delete('/:id', CustomerController.deleteById);

module.exports = router;
