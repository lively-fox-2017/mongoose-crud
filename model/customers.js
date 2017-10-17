const mongoose = require('mongoose')
const url = "mongodb://admin:admin@localhost:27017/library" // with mongoDB role authenticate
const helper = require('../helper/helper')
mongoose.connect(url, helper.mongoAuth)
const schema = new mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: Number
})

const customerModel = mongoose.model('Customer', schema)

class Customer{
  static findAll(){
    return new Promise((resolve, reject) => {
      customerModel.find((err, results) => {
        if (err) {
          reject(err)
        } else {
          resolve(results)
        }
      }).sort('name') // 'title' = asc by title, '-title' = desc by title
    });
  }

  static findOne(id){
    return new Promise((resolve, reject) => {
      let objID = new mongoose.mongo.ObjectID(id)
      customerModel.findOne({_id: objID}, (err, result) => {
        if (err){
          reject(err)
        } else {
          resolve(result)
        }
      })
    });
  }

  static insert(data){
    return new Promise((resolve, reject) => {
      customerModel(data).save((err, result) => {
        if (err){
          reject(err)
        } else {
          resolve(result)
        }
      })
    });
  }

  static update(data, id){
    return new Promise((resolve, reject) => {
      let objID = new mongoose.mongo.ObjectID(id)
      customerModel.update({_id: objID}, {$set: data}, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    });
  }

  static delete(id){
    return new Promise((resolve, reject) => {
      let objID = new mongoose.mongo.ObjectID(id)
      customerModel.remove({_id: objID}, (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve(result)
        }
      })
    });
  }
}

module.exports = Customer
