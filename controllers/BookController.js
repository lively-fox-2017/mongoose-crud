const Book = require('../models/Book');

class BookController {

  static all (req, res) {

    const fetchAllBook = Book.find();

    fetchAllBook.then((books) => {

      res.status(200).json(books);

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static create (req, res) {

    const newBook = {
      isbn: req.body.isbn,
      title: req.body.title,
      author: req.body.author,
      category: req.body.category,
      stock: req.body.stock
    };

    const insertBook = Book.insertMany(newBook);

    insertBook.then((book) => {

      res.status(201).json({
        message: 'book successfully created',
        book: book
      });

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static getById (req, res) {

    const fetchBookById = Book.findById(req.params.id);

    fetchBookById.then((book) => {

      if (book)
        res.status(200).json(book);
      else
        res.status(404).json({ message: 'book not found' });

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static updateById (req, res) {

    const fetchBookById = Book.findById(req.params.id);

    // Fetch the book
    fetchBookById.then((book) => {

      if (book) {

        const newBookInfo = {
          isbn: req.body.isbn || book.isbn,
          title: req.body.title || book.title,
          author: req.body.author || book.author,
          category: req.body.category || book.category,
          stock: req.body.stock || book.stock
        };

        const updateBookById = Book.where({ _id: book.id }).update(newBookInfo);

        // Update the book
        updateBookById.then((status) => {

          res.status(200).json({
            message: 'book successfully updated',
            status: status,
            value: book,
            newValue: newBookInfo
          });

        }).catch((err) => {

          res.status(400).json({
            error: err.message
          });

        });

      } else {

        res.status(404).json({ message: 'book not found' });

      }

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static deleteById (req, res) {

    const fetchBookById = Book.findById(req.params.id);

    // Fetch the book
    fetchBookById.then((book) => {

      if (book) {

        const deleteBookById = Book.deleteOne({ _id: book.id });

        deleteBookById.then((status) => {

          res.status(200).json({
            message: 'book successfully deleted',
            status: status,
            book: book
          });

        }).catch((err) => {

          res.status(400).json({
            error: err.message
          });

        });

      } else {

        res.status(404).json({
          message: 'book not found'
        });

      }

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

}

module.exports = BookController;
