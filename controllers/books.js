const Book = require('../models/books');

class BookCRUD {
    constructor() {
        
    }

    static findAll(req, res){
        Book.find((err, books)=>{
            if(err){
                res.status(500).send(err)
            } else {
                res.status(200).send(books)
            }
        })
    }

    static create(req, res){
        let book = new Book(req.body)
        book.save()
        .then(addingbook=>{
            res.send(addingbook).status(200)
        })
        .catch(err=>{
            res.send(err).status(500)
        })
    }

    static update(req, res){
        Book.findById(req.params.id)
        .then(book=>{
            book.isbn = req.body.isbn||book.isbn;
            book.title = req.body.title||book.title;
            book.author = req.body.author||book.author;
            book.category = req.body.category||book.category;
            book.stock = req.body.stock||book.stock;
            book.save()
            .then(book=>{
                res.send(book).status(200)
            })
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static delete(req, res){
        Book.findByIdAndRemove(req.params.id)
        .then((book)=>{
            let message = {
                msg: "Success remove",
                book
            }
            res.send(message)
        })
        .catch(err=>{
            res.send(err)
        })
    }
}

module.exports = BookCRUD;