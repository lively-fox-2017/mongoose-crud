var Customer = require('../models/customers');


class CustomerController{
  static getAll(req,res){
    Customer.find({},(err,result)=>{
      res.json(200,{msg:'book list', data:result})
    })
  }

  static addNew(req,res){
    let insert={
      name: req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode: req.body.zipcode,
      phone:req.body.phone
    }
    Customer.create(insert).then(result=>{
      res.json(200,{msg:'new book', data:result})
    })
  
  }

  static editData(req,res){
    let condition={
      _id : req.body.id
    }
    let newData={
        $set:{
          name: req.body.name,
          memberid:req.body.memberid,
          address:req.body.address,
          zipcode: req.body.zipcode,
          phone:req.body.phone
        }
      }
      Customers.update(condition,newData).then(result=>{
        res.json(200,{msg:"edited id", data:result})
        })
      }

  static deleteData(req,res){
    let condition={
      _id : req.body.id
    }
    Customer.findOneAndRemove(condition).then(result=>{
      res.json(200,{msg:"deleted id", data:result})
      })
    }





}

module.exports = CustomerController;
