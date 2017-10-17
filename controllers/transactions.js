const models = require('../models/transactions');

class Transactions {
  static findAll(req, res){
    models.getTransactions((err, transactions)=>{
      if(err){
        res.send(err)
      }
      res.json(transactions)
    })
  }

  static create(req, res){
    models.addTransaction(req.body, (err, transaction)=>{
      if (err) {
        res.send(err)
      }
      res.send(transaction)
    })
  }

  static update(req, res){
    models.updateTransaction(req.params, req.body, (err, transaction)=>{
      if (err) {
        res.send(err)
      }
      res.json(transaction)
    })
  }

  static delete(req, res){
    models.deleteTransaction(req.params, (err, transaction)=>{
      if (err) {
        res.send(err)
      }
      res.send('Success Delete From Transaction')
    })
  }


}
module.exports = Transactions;
