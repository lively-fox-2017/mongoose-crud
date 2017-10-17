const express=require('express')
const router= express.Router()
const costumer = require('../controllers/costumer')

router.get('/costumer',costumer.viewCostumer)

router.post('/costumer',costumer.insertCostumer)

router.delete('/costumer/:id',costumer.deleteCostumer)

router.put('/costumer/:id',costumer.updateCostumer)

module.exports = router;
