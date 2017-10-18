const express = require('express');
const router = express.Router()
const Library = require('../controller/book')

router.get('/', Library.getData)

router.post('/', Library.saveData)

router.delete('/:isbn', Library.deleteData)

router.put('/:isbn', Library.updateBook)

module.exports = router
