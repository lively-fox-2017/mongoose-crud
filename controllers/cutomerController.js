const Customer = require('../models/customers')

module.exports = {
  all: (req, res) => {
    Customer.find((err, dataCustomer) => {
      if (err) {
        res.send(err)
      } else {
        res.send(dataCustomer)
      }
    })
  },
  create: (req, res) => {
    let customer = new Customer({
      name: req.body.name,
      memberId: req.body.memberId,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
    customer.save((err, dataCustomer) => {
      if (err) {
        res.send(err)
      }else {
        res.send({
          message: 'data Berhasil di buat',
          dataCustomer: dataCustomer
        })
      }
    })
  },
  update: (req, res) => {
    Customer.update({_id: req.params.id}, {
      $set: req.body
    }, (err, dataCustomer) => {
      if(err){
        res.send(err)
      } else {
        res.send({
          message: 'data berhasil di update',
          dataCustomer: dataCustomer
        })
      }
    })
  },
  deleteCustomer: (req, res) => {
    Customer.remove({_id: req.params.id}, (err, dataCustomer) => {
      if (err) {
        res.send(err)
      } else {
        res.send({
          message: 'data berhasil di hapus',
          dataCustomer: dataCustomer
        })
      }
    })
  }
}
