'use strict';
const Models = require('../models');

class Costumer{
  static getAll(req, res){
    Models.Customer.find({}, function(err, books){
      let result = {
        message:'Status OK',
        data:books
      }
      res.status(200).json(result)
    })
  }

  static insert(req, res){
    let customerDetail={
      name:req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    }
    Models.Customer(customerDetail).save(function(err){
      if(err){
        let result={
          message:'Bad request',
          data:{err}
        }
        res.status(400).json(result)
      }else{
        let result={
          message:'Berhasil input',
          data:customerDetail
        }
        res.status(201).json(result)
      }
    })
  }

  static deleteByMemberId(req, res){
    let memberid = req.params.memberid;
    Models.Customer.findOne({memberid}, function(err, iresult){
      if(err || !iresult){
        let result={
          message:'Bad request',
          data:{err}
        }
        res.status(400).json(result)
      }else{
        iresult.remove();
        let result={
          message:'Berhasil delete',
          data:{}
        }
        res.status(204).json(result)
      }
    })
  }

  static editByMemberId(req, res){
    let memberid = req.params.memberid;
    Models.Customer.findOne({memberid}, function(err, customer){
      if(err){
        let result={
          message:'Bad request',
          data:{err}
        }
        res.status(400).json(result)
      }else{
        customer.memberid=req.body.memberid && req.body.memberid.length>0?req.body.memberid:customer.memberid;
        customer.name=req.body.name && req.body.name.length>0?req.body.name:customer.name;
        customer.address=req.body.address && req.body.address.length>0?req.body.address:customer.address;
        customer.zipcode=req.body.zipcode && req.body.zipcode.length>0?req.body.zipcode:customer.zipcode;
        customer.phone=req.body.phone && req.body.phone.length>0?req.body.phone:customer.phone;
        customer.save();
        let result = {
          message:'update Success',
          data:{customer}
        }
        res.status(200).json(result)
      }
    })
  }

}

module.exports = Costumer;
