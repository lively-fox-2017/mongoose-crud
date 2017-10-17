const moment = require('moment')
const mongoose = require('mongoose')
const url = "mongodb://admin:admin@localhost:27017/library" // with mongoDB role authenticate
const helper = require('../helper/helper')
mongoose.connect(url, helper.mongoAuth)
const schema = new mongoose.Schema({
  member: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Customer'
  },
  days: {
    type: Number,
    required: true
  },
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Book'
  }]
})

const transactionModel = mongoose.model('Transaction', schema)

module.exports = transactionModel
