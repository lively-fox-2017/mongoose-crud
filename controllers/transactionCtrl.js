const Transaction = require('../models/transaction');
const ObjectId = require('mongoose').Types.ObjectId;

class TransactionCtrl {
  static getTransactions(req, res) {
    Transaction.find()
      .populate(['member', 'booklist'])
      .exec()
      .then(transactions => {
        res.status(200).send(transactions);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static getTransaction(req, res) {
    Transaction.findOne({
        _id: new ObjectId(req.params.transactionId)
      })
      .populate(['member', 'booklist'])
      .exec()
      .then(book => {
        res.status(200).send(book);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static createTransaction(req, res) {
    let newTransaction = new Transaction(req.body);
    newTransaction.save().exec()
      .then(value => {
        res.status(201).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static deleteTransaction(req, res) {
    Transaction.deleteOne({
        memberid: req.params.memberid
      }).exec()
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static updateTransaction(req, res) {
    Transaction.update({
        _id: new ObjectId(req.params.transactionId)
      }, req.body)
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }
}

module.exports = TransactionCtrl;
