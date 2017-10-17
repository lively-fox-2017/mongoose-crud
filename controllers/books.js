const Book = require('../models/books')

class Books {

  static findBooks(req,res){
    Book.find({}, function(err, books) {
    if (err) {
      res.send(err)
    } else {

      res.send(books)
    }
  });
  }

  static createBooks(req,res){
    let newBooks = Book({
      "isbn": req.body.isbn,
      "title":req.body.title,
      "author":req.body.author,
      "category":req.body.category,
      "stock":req.body.stock
    })
    // console.log('==============',newBooks);
    newBooks.save(function(err,books) {
      if (err) throw err;
      res.send({
        "Message": "Data Berhasil di Tambah",
         data: books
      });
    })
  }

  static deleteBooks(req,res){
    Book.findOneAndRemove({ _id: req.params.id }, function(err, books) {
    if (err) throw err;
    res.send({
      "message": "Data Berhasil di Delete!",
      books: books
    })
    });
  }

  static updateBooks(req,res){
    Book.findByIdAndUpdate({_id: req.params.id}, {
      "isbn": req.body.isbn,
      "title":req.body.title,
      "author":req.body.author,
      "category":req.body.category,
      "stock":req.body.stock
    },
    function(err, books) {
    if (err) throw err;
    res.send({
      "message": "Data Berhasil di Update!",
      books: books
    })
    })
  }
}

module.exports = Books
