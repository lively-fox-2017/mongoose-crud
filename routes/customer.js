var express = require('express');
var router = express.Router();
var customerCtrl = require('../controllers/customer')
/* GET home page. */


router.get('/', customerCtrl.get);

router.post('/', customerCtrl.post)

router.put('/:id', customerCtrl.update)

router.delete('/:id', customerCtrl.delete)

module.exports = router;
