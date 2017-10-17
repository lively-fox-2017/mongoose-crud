var Customers = require('../models/customers');


class CustomerController{
  static getAll(req,res){
    Customers.getAll().then(result=>{
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
    Customers.addNew(insert).then(result=>{
        res.json(200,{msg:'new book', data:result})
    })
  }

  static editData(req,res){
    let newData={
        $set:{
          name: req.body.name,
          memberid:req.body.memberid,
          address:req.body.address,
          zipcode: req.body.zipcode,
          phone:req.body.phone
        }
      }
      Customers.editData(req.body.id,newData).then(result=>{
        res.json(200,{msg:"edited id", data:result})
        })
      }

  static deleteData(req,res){
      Customers.deleteData(req.body.id).then(result=>{
        res.json(200,{msg:"deleted id", data:result})
        })
      }





}

module.exports = CustomerController;
