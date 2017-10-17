const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const URL = 'mongodb://localhost:27017/booksdb';
mongoose.Promise = global.Promise;
mongoose.connect(URL);

var transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Customer'
  },
  days: {
    type: Number,
    required: true,
  },
  out_date: {
    type: Date,
    required: true,
  },
  due_date: {
    type: Date,
  },
  in_date: {
    type: Date,
  },
  fine: Number,
  booklist: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
});

transactionSchema.pre('save', (next) => {
  let out_date = new Date(this.out_date);
  out_date.setDate(out_date.getDate() + this.days);
  this.due_date = Date(out_date);
  next();
})

transactionSchema.pre('update', () => {
  let out_date = new Date(this.out_date);
  out_date.setDate(out_date.getDate() + this.days);
  let due_date = Date(out_date);
  this.update({}, {
    $set: {
      updatedAt: due_date
    }
  });
});

transactionSchema.pre('findOneAndUpdate', function() {
  let out_date = new Date(this.out_date);
  out_date.setDate(out_date.getDate() + this.days);
  let due_date = Date(out_date);
  this.update({}, {
    $set: {
      updatedAt: due_date
    }
  });
});

module.exports = mongoose.model('Transaction', transactionSchema);
