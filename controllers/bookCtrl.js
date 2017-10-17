const Book = require('../models/book');

class BookCtrl {
  static getBooks(req, res) {
    Book.find()
      .then(books => {
        res.status(200).send(books);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static getBook(req, res) {
    Book.findOne({
        isbn: req.params.isbn
      })
      .then(book => {
        res.status(200).send(book);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static createBook(req, res) {
    let newBook = new Book(req.body);
    newBook.save()
      .then(value => {
        res.status(201).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static deleteBook(req, res) {
    Book.deleteOne({
        isbn: req.params.isbn
      })
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static updateBook(req, res) {
    Book.updateOne({
        isbn: req.params.isbn
      }, req.body)
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }
}

module.exports = BookCtrl;
