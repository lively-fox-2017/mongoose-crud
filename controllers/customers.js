const Customer = require('../models/customers')

class Customers {

  static findCustomers(req,res){
    Customer.find({}, function(err, customers) {
    if (err) {
      res.send(err)
    } else {
      res.send(customers)
    }
  });
  }

  static createCustomers(req,res){
    let newCustomers = Customer({
      "name": req.body.name,
      "memberid":req.body.memberid,
      "address":req.body.address,
      "zipcode":req.body.zipcode,
      "phone":req.body.phone
    })
    newCustomers.save(function(err,customers) {
      if (err) throw err;
      res.send({
        "Message": "Data Berhasil di Tambah",
         data: customers
      });
    })
  }


  static deleteCustomers(req,res){
    Customer.findOneAndRemove({ _id: req.params.id }, function(err, customers) {
    if (err) throw err;
    res.send({
      "message": "Data Berhasil di Delete!",
      data: customers
    })
    });
  }

  static updateCustomers(req,res){
    Customer.findByIdAndUpdate({_id: req.params.id}, {
      "name": req.body.name,
      "memberid":req.body.memberid,
      "address":req.body.address,
      "zipcode":req.body.zipcode,
      "phone":req.body.phone
    },
    function(err, customers) {
    if (err) throw err;
    res.send({
      "message": "Data Berhasil di Update!",
      "name": req.body.name,
      "memberid":req.body.memberid,
      "address":req.body.address,
      "zipcode":req.body.zipcode,
      "phone":req.body.phone
    })
    })
  }
}


module.exports = Customers
