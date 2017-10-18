var Book = require('../models/book')

class bookController {
    static getEditPage(req,res) {
        Book.findOne({_id: req.params.id})
        .then((book,err) => {
            if(err) return res.send(err)

            res.render('editBook', {title: 'Edit Books', book:book})
        })
    }

    static get(req,res) {
        Book.find({})
        .then((book,err) => {
          if(err) {
            res.send(err)
          }
          res.render('books', {title: 'Books', books:book})
        })
    }

    static post(req,res) {
        var book = new Book({
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
          })
        
          book.save()
          .then((result, err) => {
            if(err) {
              res.send(err)
            }
            res.redirect('/books')
          })
    }

    static update(req,res) {
        Book.findOneAndUpdate({_id: req.params.id},{
            isbn: req.body.isbn,
            title: req.body.title,
            author: req.body.author,
            category: req.body.category,
            stock: req.body.stock
        })
        .then((book,err) => {
            if(err) return res.send(err)

            res.redirect('/books')
        })
    }

    static delete(req,res) {
        // Book.findOne({_id: req.params.id})
        // .then((book,err) => {
        //     res.send(book)
        // })
        Book.findOneAndRemove({_id: req.params.id})
        .then((book,err) => {
            if(err) return res.send(err)

            res.redirect('/books')
        })
    }
}

module.exports = bookController