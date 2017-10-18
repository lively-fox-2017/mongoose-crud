'use strict';
const Models = require('../models');

class Book{
  static getAll(req, res){
    Models.Book.find({}, function(err, books){
      let result = {
        message:'Status OK',
        data:books
      }
      res.status(200).json(result)
    })
  }

  static insert(req, res){
    let bookDetail={
      isbn:req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    }
    Models.Book(bookDetail).save(function(err){
      if(err){
        let result={
          message:'Bad request',
          data:{err}
        }
        res.status(400).json(result)
      }else{
        let result={
          message:'Berhasil input',
          data:{}
        }
        res.status(201).json(result)
      }
    })
  }

  static deleteByISBN(req, res){
    let isbn = req.params.isbn;
    Models.Book.find({isbn}).remove(function(err){
      if(err){
        let result={
          message:'Bad request',
          data:{err}
        }
        res.status(400).json(result)
      }else{
        let result={
          message:'Berhasil delete',
          data:{}
        }
        res.status(204).json(result)
      }
    })
  }

  static editByISBN(req, res){
    let isbn = req.params.isbn;
    Models.Book.findOne({isbn}, function(err, book){
      if(err){
        let result={
          message:'Bad request',
          data:{err}
        }
        res.status(400).json(result)
      }else{
        book.isbn=req.body.isbn && req.body.isbn.length>0?req.body.isbn:book.isbn;
        book.title=req.body.title && req.body.title.length>0?req.body.title:book.title;
        book.author=req.body.author && req.body.author.length>0?req.body.author:book.author;
        book.category=req.body.category && req.body.author.length>0?req.body.author:book.category;
        book.stock=req.body.stock && req.body.stock.length>0?req.body.stock:book.stock;
        book.save();
        let result = {
          message:'update Success',
          data:{book}
        }
        res.status(200).json(result)
      }
    })
  }
}

module.exports = Book;
