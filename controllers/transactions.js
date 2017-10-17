var Transactions = require('../models/transactions');
var moment = require('moment');


class TransactionController{
  static getAll(req,res){
    Transactions.getAll().then(result=>{
        res.json(200,{msg:'book list', data:result})
    })
  }

  static addNew(req,res){
    let insert={
      member: req.body.member,
      days:req.body.days,
      out_date:new Date(),
      due_date: moment(new Date()).add('days', req.body.days),
      booklist:req.body.booklist

    }
    Transactions.addNew(insert).then(result=>{
        res.json(200,{msg:'new book', data:result})
    })
  }

  static editData(req,res){

    let newData={
        $set:{
          in_date: new Date()
        }
      }
      Transactions.editData(req.body.id,newData).then(result=>{
        res.json(200,{msg:"edited id", data:result})
        })
      }

  static deleteData(req,res){
      Transactions.deleteData(req.body.id).then(result=>{
        res.json(200,{msg:"deleted id", data:result})
        })
      }





}

module.exports = TransactionController;
