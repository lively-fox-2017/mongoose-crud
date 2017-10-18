const mongoose = require('../models/transaction')

class Library {

  static getData(req, res){
    mongoose.getTransaction(function(result){
      res.send(result)
    })
  }

  static saveData(req, res){
    mongoose.saveTransaction(req.body, function(){
      res.send('SAVED!')
    })
  }

  static updateData(req, res){
    mongoose.updateTransaction(req.params._id, req.body, function(){
      res.send('UPDATED!')
    })
  }

  static deleteData(req, res){
    mongoose.deleteTransaction(req.params._id, function(){
      res.send('DELETED!')
    })
  }

}

module.exports = Library
