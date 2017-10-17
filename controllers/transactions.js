var Model = require('../models/transactions')

class Transaction {
  constructor() {

  }

  static findData(req,res) {
    Model.find({})
    .populate('member')
    .populate('booklist')
    .then(dataTransaction => {
      res.send(dataTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static createData(req,res) {
    // console.log('ada disini');
    let newTransaction = new Model({
      member: req.body.member,
      days: req.body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      booklist: req.body.booklist
    })
    // console.log(newTransaction);
    newTransaction.save()
    .then(function(dataTransaction) {
      // console.log('SAMPE SINIIII');
      res.send(dataTransaction)
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
    .then(function(err,dataTransaction) {
      res.send(dataTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

  static updateData(req,res) {
    var id = {
      _id: req.params.id
    }
    var transaction = {
      "member": req.body.member,
      "days": req.body.days,
      "out_date": new Date(),
      "due_date": new Date(),
      "in_date": new Date(),
      "booklist": req.body.booklist
    }
    Model.findByIdAndUpdate(id,transaction)
    .then(function(err,dataTransaction) {
      res.send(dataTransaction)
    })
    .catch(err => {
      res.send(err)
    })
  }

}

module.exports = Transaction;
