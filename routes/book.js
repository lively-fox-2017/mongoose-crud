var express = require('express');
var router = express.Router();
var Book = require('../models/book')
var db = 'mongodb://localhost/mongoose-library'
/* GET home page. */


router.get('/', function(req, res, next) {
  console.log('getting books')
  Book.find({})
  .then((err,book) => {
    if(err) {
      res.send(err)
    }
    res.send({
        message: 'Book list has been loaded',
        list: book
    })
  })
});

router.post('/', (req,res) => {
  book = new Book({
    isbn: req.body.isbn,
    title: req.body.title,
    author: req.body.author,
    category: req.body.category,
    stock: req.body.stock
  })

  book.save()
  .then((err, result) => {
    if(err) {
      res.send(err)
    }
    // console.log(result)
    res.send({
        message: 'Book has been added',
        added: result
    })
  })
})

router.put('/:id', (req,res) => {
    Book.findOneAndUpdate({_id: req.params.id},{title: 'Dragon Pinch'}, (err, user) => {
        if(err) return console.log(err)
        
        res.send({
            message: 'user has been edited',
            user: user
        })
    })
})

router.delete('/:id', (req,res) => {
    Book.findOneAndRemove({_id: req.params.id}, (err,user) => {
        if(err) return console.log(err)

        res.send({
            message: 'user has been deleted',
            user: user
        })
    })
})

module.exports = router;
