const Customer = require('../model/customers')
const helper = require('../helper/helper')

module.exports = {
  findAll: (req, res) => {
    Customer.findAll().then((rowsCustomer) => {
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
    Customer.findOne(req.params.id).then((rowCustomer) => {
      res.json({
        message: "Tampil Satu Data Customer",
        data: rowCustomer
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  insert: (req, res) => {
    Customer.insert(helper.dataCustomer(req.body)).then((rowCustomerInserted) => {
      res.json({
        message: "Memasukan Data",
        data: rowCustomerInserted
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  update: (req, res) => {
    Customer.update(helper.dataCustomer(req.body), req.params.id).then((rowUpdateCustomer) => {
      res.json({
        message: "Update",
        data: rowUpdateCustomer
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  },

  delete: (req, res) => {
    Customer.delete(req.params.id).then((rowDeleteCustomer) => {
      res.json({
        message: "Deleted",
        data: rowDeleteCustomer
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  }
}
