const express = require('express');
const router = express.Router();
const BookController = require('./../../controllers/book');

// find all
router.get('/', BookController.findAll)

// find one
router.get('/:id', BookController.findOne)

// create
router.post('/', BookController.create)

// update
router.put('/:id', BookController.update)

// delete
router.delete('/:id', BookController.delete)

module.exports = router;