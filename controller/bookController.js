const Book = require('../model/books')
const helper = require('../helper/helper')

module.exports = {
  findAll: (req, res) => {
    Book.find().sort('title').then((rowsBook) => {
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
    Book.findOne({_id: req.params.id}).then((rowBook) => {
      if (rowBook) {
        res.json({
          message: "Tampil Satu Data Buku",
          data: rowBook
        })
      } else {
        res.json({
          message: "Maaf Id tersebut tidak ada"
        })
      }
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  insert: (req, res) => {
    Book(helper.dataBook(req.body)).save().then((rowBookInserted) => {
      res.json({
        message: "Berhasil Memasukan Data",
        data: rowBookInserted
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  update: (req, res) => {
    Book.update({_id: req.params.id}, {$set: helper.dataBook(req.body)}).then((rowUpdateBook) => {
      if (rowUpdateBook.n != 0) {
        res.json({
          message: "Berhasil Update",
          data: rowUpdateBook
        })
      } else {
        res.json({
          message: "Data tidak ditemukan"
        })
      }
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  delete: (req, res) => {
    Book.remove({_id: req.params.id}).then((rowDeleteBook) => {
      if (rowDeleteBook.result.n != 0) {
        res.json({
          message: "Berhasil Hapus",
          data: rowDeleteBook
        })
      } else {
        res.json({
          message: "Maaf Id tersebut tidak ada"
        })
      }
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  }
}
