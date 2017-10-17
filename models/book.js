const mongoose = require('mongoose');
let Schema = mongoose.Schema;
const URL = 'mongodb://localhost:27017/booksdb';
mongoose.Promise = global.Promise;
mongoose.connect(URL);

var bookSchema = new Schema({
  'isbn': {
    type: String,
    required: true,
    unique: true
  },
  'title': {
    type: String,
    required: true,
  },
  'author': {
    type: String,
    required: true,
  },
  'category': {
    type: String
  },
  'stock': {
    type: Number,
    min: [0, 'Stock minimum is 0'],
    default: 0
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

bookSchema.pre('update', function() {
  this.update({}, {
    $set: {
      updatedAt: Date.now()
    }
  });
});

bookSchema.pre('findOneAndUpdate', function() {
  this.update({}, {
    $set: {
      updatedAt: Date.now()
    }
  });
});

module.exports = mongoose.model('Book', bookSchema);
