const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
  member: { type: Schema.Types.ObjectId, ref: 'Customer' },
  days: Number,
  out_date: { type: Date, default: Date.now },
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Transaction', transactionSchema);
