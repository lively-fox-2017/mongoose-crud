const express=require('express')
const router=express.Router()
const transaction=require('../controllers/transaction')

router.get('/transaction',transaction.viewTransaction)

router.post('/transaction',transaction.insertTransaction)

router.delete('/transaction/:id',transaction.deleteTransaction)

router.put('/transaction/:id',transaction.updateTransaction)
module.exports = router;
