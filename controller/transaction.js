const modelBook = require('../models/transaction')

class Book {
  constructor() {

  }
  static findAll(req,res){
    modelBook.find({})
    .populate('member')
    .populate('booklist')
    .then(rows=>{
      // console.log(rows);
      res.send(rows)
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static create(req,res){
    modelBook.create({
      member:req.body.member,
      days:req.body.days,
      out_date:req.body.out_date,
      due_date:req.body.due_date,
      in_date:req.body.in_date,
      fine:req.body.fine,
      booklist:req.body.booklist,
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
    modelBook.findOneAndUpdate({
      _id: req.params.id
    },{
      member:req.body.member,
      days:req.body.days,
      out_date:req.body.out_date,
      due_date:req.body.due_date,
      in_date:req.body.in_date,
      fine:req.body.fine,
      booklist:req.body.booklist,
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
    modelBook.findOneAndRemove({_id:req.params.id})
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

module.exports = Book
