'use strict';
const ControllerCostumers = require('../controllers/costumers');
const express = require('express');
const router = express.Router()

router.get('/', ControllerCostumers.getAll);
router.post('/', ControllerCostumers.insert);
router.delete('/:memberid', ControllerCostumers.deleteByMemberId);
router.put('/:memberid', ControllerCostumers.editByMemberId);

module.exports = router;
