const mongoose = require('mongoose')

const Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;

var bookSchema =  new Schema({
              isbn: {type: String},
              title: {type: String},
              author: {type: String},
              category: {type: String},
              stock: Number
             })

var Book = mongoose.model('Book', bookSchema);
module.exports = Book
