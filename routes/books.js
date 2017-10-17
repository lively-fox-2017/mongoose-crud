var express = require('express');
var router = express.Router();
var BookCtrl = require('../controllers/booksCtrl');

/* GET home page. */
router.get('/', BookCtrl.read);
router.post('/', BookCtrl.create);
router.put('/:id', BookCtrl.update);
router.delete('/:id', BookCtrl.delete);
router.get('/:id', BookCtrl.readOne);

module.exports = router;
