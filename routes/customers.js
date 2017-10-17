var express = require('express');
var router = express.Router();
var CustomersCtrl = require('../controllers/CustomersCtrl');

/* GET home page. */
router.get('/', CustomersCtrl.read);
router.post('/', CustomersCtrl.create);
router.put('/:id', CustomersCtrl.update);
router.delete('/:id', CustomersCtrl.delete);
router.get('/:id', CustomersCtrl.readOne);

module.exports = router;
