const models = require('../models/books');

class Books {
  static findAll(req, res){
    models.getBooks((err, books)=>{
      if(err){
        res.send(err)
      }
      res.json(books)
    })
  }

  static create(req, res){
    models.addBook(req.body, (err, book)=>{
      if (err) {
        res.send(err)
      }
      res.json(book)
    })
  }

  static update(req, res){
    models.updateBook(req.params, req.body, (err, book)=>{
      if (err) {
        res.send(err)
      }
      res.json(book)
    })
  }

  static delete(req, res){
    models.deleteBook(req.params, (err, book)=>{
      if (err) {
        res.send(err)
      }
      res.send('Success Delete From Books')
    })
  }


}
module.exports = Books;
