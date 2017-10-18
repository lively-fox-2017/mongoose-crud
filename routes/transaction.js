const express = require('express');
const router = express.Router()
const Library = require('../controller/transaction')

router.get('/', Library.getData)

router.post('/', Library.saveData)

router.put('/:_id', Library.updateData)

router.delete('/:_id', Library.deleteData)

module.exports = router
