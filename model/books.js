const mongoose = require('mongoose')
const url = "mongodb://admin:admin@localhost:27017/library" // with mongoDB role authenticate
const helper = require('../helper/helper')
mongoose.connect(url, helper.mongoAuth)
const schema = new mongoose.Schema({
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String,
    required: true
  },
  author: String,
  category: String,
  stock: {
    type: Number,
    required: true
  }
})

const bookModel = mongoose.model('Book', schema)

// class Book{
//   static findAll(){
//     return new Promise((resolve, reject) => {
//       bookModel.find((err, results) => {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(results)
//         }
//       }).sort('title') // 'title' = asc by title, '-title' = desc by title
//     });
//   }
//
//   static findOne(id){
//     return new Promise((resolve, reject) => {
//       let objID = new mongoose.mongo.ObjectID(id)
//       bookModel.findOne({_id: objID}, (err, result) => {
//         if (err){
//           reject(err)
//         } else {
//           resolve(result)
//         }
//       })
//     });
//   }
//
//   static insert(data){
//     return new Promise((resolve, reject) => {
//       bookModel(data).save((err, result) => {
//         if (err){
//           reject(err)
//         } else {
//           resolve(result)
//         }
//       })
//     });
//   }
//
//   static update(data, id){
//     return new Promise((resolve, reject) => {
//       let objID = new mongoose.mongo.ObjectID(id)
//       bookModel.update({_id: objID}, {$set: data}, (err, result) => {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(result)
//         }
//       })
//     });
//   }
//
//   static delete(id){
//     return new Promise((resolve, reject) => {
//       let objID = new mongoose.mongo.ObjectID(id)
//       bookModel.remove({_id: objID}, (err, result) => {
//         if (err) {
//           reject(err)
//         } else {
//           resolve(result)
//         }
//       })
//     });
//   }
// }

module.exports = bookModel
