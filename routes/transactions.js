const express = require('express');
const router = express.Router();
const Trans = require('../controllers/transactions')


/* GET home page. */
router.get('/', Trans.findTransaction)
router.post('/', Trans.createTransaction)
// router.delete('/:id', Book.deleteBooks)
// router.put('/:id', Book.updateBooks)
module.exports = router;
