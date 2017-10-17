var express = require('express');
var router = express.Router();
var Collection = require('../models/collection')
var collectionCtrl = require('../controllers/transaction')
/* GET home page. */


router.get('/', collectionCtrl.get);

router.post('/', collectionCtrl.post)

router.get('/edit/:id', collectionCtrl.getEditPage)

router.put('/:id', collectionCtrl.update)

router.delete('/:id',collectionCtrl.delete)

module.exports = router;
