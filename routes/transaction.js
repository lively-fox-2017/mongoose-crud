var express = require('express');
var methodOverride = require('method-override');
var router = express.Router();
var Collection = require('../models/collection')
var collectionCtrl = require('../controllers/transaction')
/* GET home page. */


router.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

router.get('/', collectionCtrl.get);

router.post('/', collectionCtrl.post)

router.get('/edit/:id', collectionCtrl.getEditPage)

router.put('/:id', collectionCtrl.update)

router.delete('/:id',collectionCtrl.delete)

module.exports = router;
