const express = require('express');
const router = express.Router();

const BookController = require('../../controllers/BookController');

// GET /api/books
router.get('/', BookController.all);

// POST /api/books
router.post('/', BookController.create);

// GET /api/books/:id
router.get('/:id', BookController.getById);

// PUT /api/books/:id
router.put('/:id', BookController.updateById);

// DELETE /api/books/:id
router.delete('/:id', BookController.deleteById);

module.exports = router;
