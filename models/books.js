var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

var Books = mongoose.model('Books', bookSchema);

module.exports = Books
