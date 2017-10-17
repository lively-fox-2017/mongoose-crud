const express = require('express');
const router = express.Router();
const Customer = require('../controllers/customerCtrl');

router.get('/', Customer.getCustomers);
router.get('/:memberid', Customer.getCustomer);
router.post('/', Customer.createCustomer);
router.delete('/:memberid', Customer.deleteCustomer);
router.put('/:memberid', Customer.updateCustomer);

module.exports = router;
