var Model = require('../models/customers')

class Customer {
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
    let newCustomer = new Model({
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    })
    console.log(newCustomer);
    newCustomer.save()
    .then(function(dataCustomer) {
      // console.log('SAMPE SINIIII');
      res.send(dataCustomer)
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
    .then(function(err,dataCustomer) {
      res.send(dataCustomer)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateData(req,res) {
    var id = {
      _id: req.params.id
    }
    var customer = {
      "name": req.body.name,
      "memberid": req.body.memberid,
      "address": req.body.address,
      "zipcode": req.body.zipcode,
      "phone": req.body.phone
    }
    Model.findByIdAndUpdate(id,customer)
    .then(function(err,dataCustomer) {
      res.send(dataCustomer)
    })
    .catch(err => {
      res.send(err)
    })
  }

}


module.exports = Customer;
