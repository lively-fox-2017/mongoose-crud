const express = require('express');
const router = express.Router();
const CustomerController = require('./../../controllers/customer');

// find all
router.get('/', CustomerController.findAll)

// find one
router.get('/:id', CustomerController.findOne)

// create
router.post('/', CustomerController.create)

// update
router.put('/:id', CustomerController.update)

// delete
router.delete('/:id', CustomerController.delete)

module.exports = router;