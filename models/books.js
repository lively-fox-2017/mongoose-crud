var mongoose = require('mongoose');


var bookSchema = mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
})

// bookSchema.pre('save', function(next) {
//   var currentDate = new Date()
//
//   this.updated_at = currentDate
//
//   if (!this.created_at)
//     this.created_at = currentDate
// })

var Book = mongoose.model('Book', bookSchema)

module.exports = Book;
