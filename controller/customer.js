const customer = require('../models/customer')

class Library {

  static getData(req, res){
    customer.getCustomer(function(result){
      res.send(result)
    })
  }

  static saveData(req, res){
    customer.saveCustomer(req.body, function(){
      res.send('SAVED!')
    })
  }

  static updateData(req, res){
    customer.updateCustomer(req.params.memberid, req.body, function(){
      res.send('UPDATED!')
    })
  }

  static deleteData(req, res){
    customer.deleteCustomer(req.params.memberid, function(){
      res.send('DELETED!')
    })
  }

}

module.exports = Library
