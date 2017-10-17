const express = require('express')
const router = express.Router()
const customer = require('../controller/customerController')

router.get('/', customer.findAll);

router.get('/:id', customer.findOne);

router.post('/insert', customer.insert);

router.put('/update/:id', customer.update);

router.delete('/delete/:id', customer.delete);

module.exports = router
