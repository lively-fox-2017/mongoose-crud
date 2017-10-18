const Book = require('../models/book')

class Library {

  static getData(req, res){
    mongoose.getBook(function(book){
      res.send(book)
    })
  }

  static saveData(req, res){
    mongoose.saveBook(req.body, function(){
      res.send('SAVED!')
    })
  }

  static deleteData(req, res){
    mongoose.deleteBook(req.params.isbn, function(){
      res.send('DELETED!')
    })
  }

  static updateBook(req, res){
    mongoose.updateData(req.params.isbn, req.body, function(){
      res.send('UPDATED!')
    })
  }

}

module.exports = Library
