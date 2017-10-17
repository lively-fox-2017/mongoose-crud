var express = require('express');
var methodOverride = require('method-override');
var router = express.Router();
var bookCtrl = require('../controllers/book')
/* GET home page. */

router.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
}));

router.get('/',bookCtrl.get);

router.post('/', bookCtrl.post)

router.get('/edit/:id', bookCtrl.getEditPage)

router.put('/:id', bookCtrl.update)

router.delete('/:id', bookCtrl.delete)

module.exports = router;
