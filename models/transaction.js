const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mongoose_library'

let Schema = mongoose.Schema
let Transaction = mongoose.model('Transaction', new Schema({
  member: {type: mongoose.Schema.Types.ObjectId, ref: 'Customer'},
  days: Number,
  out_date: {type: Date, default: Date.now},
  due_date: {type: Date, default: Date.now},
  in_date: {type: Date, default: Date.now},
  fine: Number,
  booklist: [
    {type: mongoose.Schema.Types.ObjectId, ref: 'Book'}
  ]
}))

mongoose.connect(URI)

function getTransaction(cb){

  Transaction.find({})
  .populate('booklist')
  .populate('member')
  .exec(function(err, books){
    if(err) console.log(err)
    cb(books)
  })

}

function saveTransaction(param, cb){
  let bookSplit = param.booklist.split(',')
  if(bookSplit.length > 1){

    let newTransaction = new Transaction({
      member: `${param.member}`,
      days: `${param.days}`,
      fine: `${param.fine}`,
      booklist: bookSplit
    })
    newTransaction.save(function(err){
      if(!err){
        cb()
      }else{
        res.status(200).send(err)
      }
    })
  }else{
    let newTransaction = new Transaction({
      member: `${param.member}`,
      days: `${param.days}`,
      fine: `${param.fine}`,
      booklist: `${param.booklist}`
    })
    newTransaction.save(function(err){
      if(!err){
        cb()
      }else{
        res.status(200).send(err)
      }
    })
  }
}

function updateTransaction(id, param, cb){

  let bookSplit = param.booklist.split(',')
  if(bookSplit.length > 1){
    Transaction.findOne({
      _id: `${id}`
    }, function(err, trans){
      trans.member = `${param.member}`
      trans.days = `${param.days}`
      trans.fine = `${param.fine}`
      trans.booklist = bookSplit
      trans.save(function(err){
        if(!err){
          cb()
        }else{
          res.status(200).send(err)
        }
      })
    })
  }else{
    Transaction.findOne({
      _id: `${id}`
    }, function(err, trans){
      trans.member = `${param.member}`
      trans.days = `${param.days}`
      trans.fine = `${param.fine}`
      trans.booklist = `${param.booklist}`
      trans.save(function(err){
        if(!err){
          cb()
        }else{
          res.status(200).send(err)
        }
      })
    })
  }

}

function deleteTransaction(id, cb){

  Transaction.findOneAndRemove({
    _id: `${id}`
  }, function(err, trans){
    if(err) res.status(200).send(err)
    cb()
  })

}

module.exports = {
  mongoose,
  getTransaction,
  saveTransaction,
  updateTransaction,
  deleteTransaction
}
