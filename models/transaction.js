const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const URL = 'mongodb://localhost:27017/booksdb';
mongoose.Promise = global.Promise;
mongoose.connect(URL);

var transactionSchema = new Schema({
  member: {
    type: Schema.Types.ObjectId,
    ref: 'Customer',
    required: true
  },
  days: {
    type: Number,
    required: true,
  },
  out_date: {
    type: Date,
    default: Date.now
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

transactionSchema.pre('save', function(next) {
  this.out_date = Date.now();
  let out_date = new Date(this.out_date);
  out_date.setDate(out_date.getDate() + this.days);
  this.due_date = out_date;
  next();
})

transactionSchema.pre('update', function(next) {
  this.out_date = Date.now();
  let out_date = new Date(this.out_date);
  out_date.setDate(out_date.getDate() + this.days);
  let due_date = Date(out_date);
  let fine = 0;
  if (this.in_date) {
    fine = (this.in_date - this.due_date) * 3000;
  }
  this.update({}, {
    $set: {
      due_date: due_date,
      fine: fine
    }
  });
  next();
});

transactionSchema.pre('findOneAndUpdate', function() {
  this.out_date = Date.now();
  let out_date = new Date(this.out_date);
  out_date.setDate(out_date.getDate() + this.days);
  let due_date = Date(out_date);
  if (this.in_date) {
    console.log('masuk');
  }
  this.update({}, {
    $set: {
      due_date: due_date
    }
  });
});

module.exports = mongoose.model('Transaction', transactionSchema);
