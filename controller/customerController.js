const Customer = require('../model/customers')
const helper = require('../helper/helper')

module.exports = {
  findAll: (req, res) => {
    Customer.find().sort('name').then((rowsCustomer) => {
      res.json({
        message: "Tampil Semua Data Customer",
        data: rowsCustomer
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  findOne: (req, res) => {
    Customer.findOne({_id: req.params.id}).then((rowCustomer) => {
      if (rowCustomer) {
        res.json({
          message: "Tampil Satu Data Customer",
          data: rowCustomer
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
    Customer(helper.dataCustomer(req.body)).save().then((rowCustomerInserted) => {
      res.json({
        message: "Berhasil Memasukan Data",
        data: rowCustomerInserted
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  update: (req, res) => {
    Customer.update({_id: req.params.id}, {$set: helper.dataCustomer(req.body)}).then((rowUpdateCustomer) => {
      // console.log(rowUpdateCustomer);
      if (rowUpdateCustomer.n != 0) {
        res.json({
          message: "Berhasil Update",
          data: rowUpdateCustomer
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
    Customer.remove({_id: req.params.id}).then((rowDeleteCustomer) => {
      if (rowDeleteCustomer.result.n != 0) {
        res.json({
          message: "Berhasil Hapus",
          data: rowDeleteCustomer
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
