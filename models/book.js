const express = require('express');
const router = express.Router()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const URI = 'mongodb://localhost/mongoose_library'

mongoose.connect(URI)

let Schema = mongoose.Schema
let Book = mongoose.model('Book', new Schema({
  isbn: String,
  title: String,
  author: String,
  category: String,
  stock: Number
}))

function getBook(cb){

  Book.find({}, function(err, result){
    if(err) res.status(200).send(err)
    cb(result)
  })

}

function saveBook(param, cb){

  let newBook = new Book({
    isbn: `${param.isbn}`,
    title: `${param.title}`,
    author: `${param.author}`,
    category: `${param.category}`,
    stock: `${param.stock}`
  })
  newBook.save(function(err){
    if(!err){
      cb()
    }else{
      res.status(200).send(err)
    }

  })

}

function deleteBook(isbn, cb){

  Book.findOneAndRemove({
    isbn: `${isbn}`
  }, function(err, book){
    if(!err){
      cb()
    }else{
      res.status(200).send(err)
    }
  })

}

function updateData(isbn, param, cb){

  Book.findOne({isbn: `${isbn}`}, function(err, book){
    if(err){
      res.status(200).send(err)
    }else{
      book.isbn = `${param.isbn}`
      book.title = `${param.title}`
      book.author = `${param.author}`
      book.category = `${param.category}`
      book.stock = `${param.stock}`
      book.save(function(err, book){
        if(!err){
          cb()
        }else{
          res.status(200).send(err)
        }
      })
    }
  })

}

module.exports = {
  Book,
  mongoose,
  getBook,
  saveBook,
  deleteBook,
  updateData
}
