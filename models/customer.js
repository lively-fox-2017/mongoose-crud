const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const URL = 'mongodb://localhost:27017/booksdb';
mongoose.Promise = global.Promise;
mongoose.connect(URL);

var customerSchema = new Schema({
  'name': {
    type: String,
    required: true,
  },
  'memberid': {
    type: String,
    required: true,
    unique: true,
  },
  'address': {
    type: String,
  },
  'zipcode': {
    type: String
  },
  'phone': {
    type: String,
    minlength: [10, 'The value of path `{PATH}` (`{VALUE}`) is shorter than the minimum allowed length ({MINLENGTH}).'],
    maxlength: [13, 'The value of path `{PATH}` (`{VALUE}`) is higher than the maximum allowed length ({MAXLENGTH}).'],
  },
  'createdAt': {
    type: Date,
    default: Date.now
  },
  'updatedAt': {
    type: Date,
    default: Date.now
  }
});

customerSchema.pre('update', function() {
  this.update({}, {
    $set: {
      updatedAt: Date.now()
    }
  });
});

customerSchema.pre('findOneAndUpdate', function() {
  this.update({}, {
    $set: {
      updatedAt: Date.now()
    }
  });
});

module.exports = mongoose.model('Customer', customerSchema);
