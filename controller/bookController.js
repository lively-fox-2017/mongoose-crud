const Book = require('../model/books')
const helper = require('../helper/helper')

module.exports = {
  findAll: (req, res) => {
    Book.findAll().then((rowsBook) => {
      res.json({
        message: "Tampil Semua Data Buku",
        data: rowsBook
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  findOne: (req, res) => {
    Book.findOne(req.params.id).then((rowBook) => {
      res.json({
        message: "Tampil Satu Data Buku",
        data: rowBook
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  insert: (req, res) => {
    Book.insert(helper.dataBook(req.body)).then((rowBookInserted) => {
      res.json({
        message: "Memasukan Data",
        data: rowBookInserted
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  update: (req, res) => {
    Book.update(helper.dataBook(req.body), req.params.id).then((rowUpdateBook) => {
      res.json({
        message: "Update",
        data: rowUpdateBook
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  delete: (req, res) => {
    Book.delete(req.params.id).then((rowDeleteBook) => {
      res.json({
        message: "Deleted",
        data: rowDeleteBook
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  }
}
