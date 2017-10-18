const express = require('express');
const router = express.Router();
const controllerBooks = require('../controllers/books');

router.get('/', controllerBooks.getAll);
router.post('/', controllerBooks.insert);
router.delete('/:isbn', controllerBooks.deleteByISBN)
router.put('/:isbn', controllerBooks.editByISBN)


module.exports = router;
