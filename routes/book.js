var express = require('express');
var router = express.Router();
var bookCtrl = require('../controllers/book')
/* GET home page. */


router.get('/',bookCtrl.get);

router.post('/', bookCtrl.post)

router.put('/:id', bookCtrl.update)

router.delete('/:id', bookCtrl.delete)

module.exports = router;
