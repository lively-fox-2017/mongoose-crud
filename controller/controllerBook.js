const Book = require('../models/Book')

// GET ALL BOOKS
function getAllBooks(req,res){
    Book.find({})
    .then(function(row){
        res.send(row)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}

// find One Book
function findOneBook(req,res){
    Book.findById(req.params.id)
    .then(function (row){
        res.send(row)
    })
    .catch(function (err) {
        res.status(500).send(row)
    })
}

// insert Book
function insertBook(req,res){
    Book.create({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: parseInt(req.body.stock)
    })
    .then(function (data){
        res.send(data)
    })
    .catch(function (err){
        res.status(500).send(err)
    })
}

// Delete Book
function deleteBook(req,res){
    Book.deleteOne({
        _id: req.params.id
    })
    .then(function(row){
        res.send(row)
    })
    .catch(function(err){
        res.status(500).send(err)
    })
}


// Update Book
function UpdateBook(req,res){
    // res.send(req.body)
    Book.findOneAndUpdate({
        _id: req.params.id
    },{
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: parseInt(req.body.stock)
    })
    .then(function(result){
        res.send({
            msg: 'data sukses diupdate',
            result: result
        })
    })
    .catch(function(err){
        res.status(500).send(err)
    })
}

module.exports = {
    getAllBooks,
    findOneBook,
    insertBook,
    deleteBook,
    UpdateBook
};
