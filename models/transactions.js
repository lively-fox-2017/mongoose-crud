var mongoose = require('mongoose');
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId;


var transactionSchema = mongoose.Schema({
  member: [{type:Schema.Types.ObjectId, ref:'Customer'}],
  days: Number,
  out_date: {type:Date, default: Date.now},
  due_date: {type:Date, default: Date.now},
  in_date: {type:Date, default: Date.now},
  fine: Number,
  booklist: [{type:Schema.Types.ObjectId, ref:'Book'}]
})

var Transaction = mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
