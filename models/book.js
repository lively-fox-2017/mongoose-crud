var mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/library');
// mongoose.Promise = global.Promise;
var bookSchema = new Schema({
  isbn: {type:String},
  title: {type:String},
  author: {type:String},
  category: {type:String},
  stock: {type:Number},
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
