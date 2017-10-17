const modelCustomer = require('../models/customer')

class Customer {
  constructor() {

  }
  static findAll(req,res){
    modelCustomer.find({})
    .then(rows=>{
      // console.log(rows);
      res.send(rows)
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static create(req,res){
    modelCustomer.create({
      name:req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone,
    })
    .then(rows=>{
      // console.log(rows);
      res.json({
        "message":"inserting data succesfull",
        "data":rows
      })
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static update(req,res){
    modelCustomer.findOneAndUpdate({
      _id: req.params.id
    },{
      name:req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone,
    })
    .then(rows=>{
      // console.log(rows);
      res.json({
        "message":"updating data succesfull",
        "data":rows
      })
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static delete(req,res){
    modelCustomer.findOneAndRemove({_id:req.params.id})
    .then(rows=>{
      res.json({
        "message":"deleteting data succesfull",
        "data":rows
      })
    })
    .catch(err=>{
      res.send(err);
    })
  }
}

module.exports = Customer
