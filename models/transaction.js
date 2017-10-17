'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let transactionSchema = new Schema({
  member:{type:Schema.ObjectId, ref:'Customer'},
  days:Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist:[{type:Schema.ObjectId, ref:'Book'}]
})

let Transaction= mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
