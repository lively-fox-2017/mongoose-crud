const mongoose = require('mongoose')
const URI = 'mongodb://localhost/mongoose_library'

mongoose.connect(URI)

let Schema = mongoose.Schema
let Customer = mongoose.model('Customer', new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
}))

function getCustomer(cb){

  Customer.find({}, function(err, result){
    if(err) res.status(200).send(err)
    cb(result)
  })

}

function saveCustomer(param, cb){

  let newCustomer = new Customer({
    name: `${param.name}`,
    memberid: `${param.memberid}`,
    address: `${param.address}`,
    zipcode: `${param.zipcode}`,
    phone: `${param.phone}`
  })
  newCustomer.save(function(err){
    if(!err){
      cb()
    }else{
      res.status(200).send(err)
    }
  })

}

function updateCustomer(memberid, param, cb){

  Customer.findOne({memberid: `${memberid}`}, function(err, cust){
    if(err){
      res.status(200).send(err)
    }else{
      cust.name = `${param.name}`
      cust.memberid = `${param.memberid}`
      cust.address = `${param.address}`
      cust.zipcode = `${param.zipcode}`
      cust.phone = `${param.phone}`
      cust.save(function(err, cust){
        if(!err){
          cb()
        }else{
          res.status(200).send(err)
        }
      })
    }
  })

}

function deleteCustomer(memberid, cb){

  Customer.findOneAndRemove({
    memberid: `${memberid}`
  }, function(err, cust){
    if(err){
      res.status(200).send(err)
    }else{
      cb()
    }
  })

}

module.exports = {
  getCustomer,
  saveCustomer,
  updateCustomer,
  deleteCustomer
}
