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
  this.findOne({
      _id: this._conditions._id
    })
    .then(value => {
      var diff = new Date(this._update['$set'].in_date).getTime() - value.due_date.getTime();
      if (diff >= 0) {
        // ms to days
        diff = Math.floor(diff / (1000 * 3600 * 24));
      }
      this.updateOne({
          _id: this._conditions._id
        }, {
          fine: diff * 1000
        })
        .then(() => {
          next();
        })
        .catch(reason => {
          console.log(reason);
        });
    })
    .catch(reason => {
      console.log(reason);
    })
});

transactionSchema.pre('findOneAndUpdate', function(next) {
  this.findOne({
      _id: this._conditions._id
    })
    .then(value => {
      var diff = new Date(this._update.in_date).getTime() - value.due_date.getTime();
      if (diff >= 0) {
        // ms to days
        diff = Math.ceil(diff / (1000 * 3600 * 24));
      }
      this.update({
          _id: this._conditions._id
        }, {
          fine: diff * 1000
        })
        .then(() => {
          next();
        })
        .catch(reason => {
          console.log(reason);
        });
    })
    .catch(reason => {
      console.log(reason);
    })
});

module.exports = mongoose.model('Transaction', transactionSchema);
