var express = require('express');
var router = express.Router();
var TransactionCtrl = require('../controllers/transactionCtrl');

/* GET home page. */
router.get('/', TransactionCtrl.read);
router.post('/', TransactionCtrl.create);
router.get('/:id', TransactionCtrl.readOne);
router.delete('/:id', TransactionCtrl.destroy);
router.put('/:id', TransactionCtrl.update);

module.exports = router;
