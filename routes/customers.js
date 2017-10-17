const express = require('express')
const router = express.Router()
const Customer = require('../controllers/customers')

router.get('/', Customer.findData)

router.post('/', Customer.createData)
//
router.delete('/:id', Customer.deleteData)
//
router.put('/:id', Customer.updateData)

module.exports = router;
