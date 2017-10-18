'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let bookSchema = new Schema({
  isbn: {
    type:String,
    unique: true,
    required: true
  },
  title: {
    type:String,
    required: true
  },
  author: {
    type:String,
    required: true
  },
  category: String,
  stock: {
    type:Number,
    required: true
  }
})

let Book = mongoose.model('Book', bookSchema)


module.exports = Book;
