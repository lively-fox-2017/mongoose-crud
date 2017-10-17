const dataTransaction = require('../models/transaction');
// const
let insertTransaction=function(req,res){
  dataTransaction.create({
    member:req.body.member,
    days:req.body.days,
    out_date:req.body.out_date,
    due_date:req.body.due_date,
    in_date:req.body.in_date,
    fine:req.body.fine,
    booklist:req.body.booklist
  },function(err,result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let viewTransaction = function (req,res){
  dataTransaction.find({},function(err,result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let deleteTransaction=function(req,res){
  dataTransaction.findByIdAndRemove(req.params.id,function(err,result){
    if(!err){
      res.send('data Sudah Di hapus')
    }else{
      res.send(err)
    }
  })
}

let updateTransaction= function(req,res){
  dataTransaction.findByIdAndUpdate(req.params.id,{
    member:req.body.member,
    days:req.body.days,
    out_date:req.body.out_date,
    due_date:req.body.due_date,
    in_date:req.body.in_date,
    fine:req.body.fine,
    booklist:req.body.booklist
  },function(err,result){
    if(!err){
      res.send('Data Sudah Di Update')
    }else{
      res.send(err)
    }
  })
}

module.exports = {
  insertTransaction,
  viewTransaction,
  deleteTransaction,
  updateTransaction

};
