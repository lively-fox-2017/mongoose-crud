var Model = require('../models/books')

class Book {
  constructor() {

  }

  static findData(req,res) {
    Model.find({}, function(err, books) {
      if (err) {
        res.send(err)
      } else {
        res.send(books)
      }
    })
  }

  static createData(req,res) {
    // console.log('ada disini');
    let newBook = new Model({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    console.log(newBook);
    newBook.save()
    .then(function(dataBook) {
      console.log('SAMPE SINIIII');
      res.send(dataBook)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static deleteData(req,res) {
    var id = {
      _id: req.params.id
    }
    Model.findByIdAndRemove(id)
    .then(function(err,dataBook) {
      res.send(dataBooks)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateData(req,res) {
    var id = {
      _id: req.params.id
    }
    var books = {
      "isbn": req.body.isbn,
      "title": req.body.title,
      "author": req.body.author,
      "category": req.body.category,
      "stock": req.body.stock
    }
    Model.findByIdAndUpdate(id,books)
    .then(function(err,dataBook) {
      res.send(dataBook)
    })
    .catch(err => {
      res.send(err)
    })
  }

}


module.exports = Book;
