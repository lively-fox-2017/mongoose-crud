var express = require('express');
var router = express.Router();
var CustomerController = require('../controllers/customers')


router.get('/', CustomerController.getAll )

router.post('/', CustomerController.addNew )

router.put('/', CustomerController.editData )

router.delete('/', CustomerController.deleteData )


module.exports = router;
