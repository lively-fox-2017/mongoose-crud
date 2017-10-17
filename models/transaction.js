const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  member:  [{
    type: Schema.Types.ObjectId,
    ref: 'customer'
  }],
  days: Number,
  out_date: { type: Date, default: Date.now },
  due_date: { type: Date, default: Date.now },
  in_date: { type: Date, default: Date.now },
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Books'
  }]
});

const transaction = mongoose.model('transaction', transactionSchema)

module.exports = transaction
