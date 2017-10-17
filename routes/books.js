var express = require('express');
var router = express.Router();
var BookController = require('../controllers/books')


router.get('/', BookController.getAll )

router.post('/', BookController.addNew )

router.put('/', BookController.editData )

router.delete('/', BookController.deleteData )


module.exports = router;
