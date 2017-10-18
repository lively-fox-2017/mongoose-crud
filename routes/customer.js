const express = require('express');
const router = express.Router()
const Library = require('../controller/customer')

router.get('/', Library.getData)

router.post('/', Library.saveData)

router.put('/:memberid', Library.updateData)

router.delete('/:memberid', Library.deleteData)

module.exports = router
