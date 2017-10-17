var mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/library');
// mongoose.Promise = global.Promise;
var bookSchema = new Schema({
  isbn: {type:String, required: true},
  title: {type:String, required: true},
  author: {type:String, required: true},
  category: {type:String, required: true},
  stock: {type:Number, required: true, min: [0, 'Stock min 0'],},
});

var Book = mongoose.model('Book', bookSchema);

module.exports = Book;
