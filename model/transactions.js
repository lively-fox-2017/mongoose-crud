const moment = require('moment')
const mongoose = require('mongoose')
const url = "mongodb://admin:admin@localhost:27017/library" // with mongoDB role authenticate
const helper = require('../helper/helper')
mongoose.connect(url, helper.mongoAuth)
const schema = new mongoose.Schema({
  member: mongoose.Schema.Types.ObjectId,
  days: Number,
  out_date: Date,
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Book'
  }]
})

const transactionModel = mongoose.model('Transaction', schema)

  // static findOne(id){
  //   return new Promise((resolve, reject) => {
  //     let objID = new mongoose.mongo.ObjectID(id)
  //     transactionModel.findOne({_id: objID}, (err, result) => {
  //       if (err){
  //         reject(err)
  //       } else {
  //         resolve(result)
  //       }
  //     })
  //   });
  // }
  //
  // static insert(data){
  //   return new Promise((resolve, reject) => {
  //     let newTransactionModel = transactionModel(data)
  //     transactionModel(data).save((err, result) => {
  //       if (err){
  //         reject(err)
  //       } else {
  //         resolve(result)
  //       }
  //     })
  //   });
  // }
  //
  // static update(data, id){
  //   return new Promise((resolve, reject) => {
  //     let objID = new mongoose.mongo.ObjectID(id)
  //     transactionModel.update({_id: objID}, {$set: {in_date: new Date()}}, (err, result) => {
  //       if (err) {
  //         reject(err)
  //       } else {
  //         resolve(result)
  //       }
  //     })
  //   });
  // }
  //
  // static delete(id){
  //   return new Promise((resolve, reject) => {
  //     let objID = new mongoose.mongo.ObjectID(id)
  //     transactionModel.remove({_id: objID}, (err, result) => {
  //       if (err) {
  //         reject(err)
  //       } else {
  //         resolve(result)
  //       }
  //     })
  //   });
  // }

module.exports = transactionModel
