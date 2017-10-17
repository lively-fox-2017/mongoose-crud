const Book = require('../models/books')

module.exports = {
  all: (req, res) => {
    Book.find((err, dataBook) => {
      if (err) {
        res.send(err)
      }else {
        res.send(dataBook)
      }
    })
  },
  create: (req, res) => {
    let book = new Book({
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    })
    book.save((err, dataBooks) => {
      if(err) {
        res.send(err)
      } else {
        res.send({
          msg: 'data berhasil di tambah',
          dataBooks: dataBooks
        })
      }
    })
  },
  update: (req, res) => {
    Book.update({_id: req.params.id},{
      $set: req.body
    }, (err, dataBooks) => {
      if (err) {
        res.send(err)
      } else {
        res.send({
          msg: 'data berhasil di update',
          dataBooks: dataBooks
        })
      }
    })
  },
  delete: (req, res) => {
    Book.remove({_id: req.params.id}, (err, dataBooks) => {
      if (err) {
        res.send(err)
      }else {
        res.send({
          msg: 'data berhail di hapus !!!!!',
          dataBooks: dataBooks
        })
      }
    })
  }
}
