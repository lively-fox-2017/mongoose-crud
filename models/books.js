const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  isbn:{
    type: String
  },
  title:{
    type: String
  },
  author:{
    type: String
  },
  category:{
    type: String
  },
  stock:{
    type: Number
  }
})

let Book = mongoose.model('Book', bookSchema);

class Books {
  //get books
  static getBooks(callback, limit) {
    Book.find(callback).limit(limit);
  };

  //add book
  static addBook(body, callback) {
    var book = {
      "isbn": `${body.isbn}`,
      "title": `${body.title}`,
      "author": `${body.author}`,
      "category": `${body.category}`,
      "stock": body.stock
    }
    Book.create(body, callback);
  };

  //update book
  static updateBook(params, body, callback) {
    var id = {
      _id : params.id
    }
    var update = {
      "isbn": body.isbn,
      "title": body.title,
      "author": body.author,
      "category": body.category,
      "stock": body.stock
    }
    Book.findByIdAndUpdate(id, update, callback);
  };
    //delete book
  static deleteBook(params, callback){
    var id = {
      _id : params.id
    }
    Book.deleteOne(id, callback)
  }
}
module.exports = Books;
