var Book = require('../models/book')

class bookController {
    static get(req,res) {
        Book.find({})
        .then((book,err) => {
          if(err) {
            res.send(err)
          }
          res.render('books', {title: 'Books', books:book})
        //   res.send({
        //       message: 'Book list has been loaded',
        //       list: book
        //   })
        })
    }

    static post(req,res) {
        book = new Book({
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
            // console.log(result)
            res.send({
                message: 'Book has been added',
                added: result
            })
          })
    }

    static update(req,res) {
        Book.findOneAndUpdate({_id: req.params.id},{title: 'Dragon Pinch'}, (user, err) => {
            if(err) return console.log(err)
            
            res.send({
                message: 'user has been edited',
                user: user
            })
        })
    }

    static delete(req,res) {
        Book.findOneAndRemove({_id: req.params.id}, (user,err) => {
            if(err) return console.log(err)
    
            res.send({
                message: 'user has been deleted',
                user: user
            })
        })
    }
}

module.exports = bookController