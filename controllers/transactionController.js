const Transaction = require('../models/transaction')

module.exports = {
  all: (req, res) => {
    Transaction.find({})
    .populate({path: 'member', models: 'customer', select: 'name'})
    .populate({path: 'booklist', models: 'Books', select: 'title author'})
    .then((datatransactions) => {
      res.send(datatransactions)
    })
    .catch((err) => {
      res.send(err)
    })
  },
  create: (req, res) => {
    let transaction = new Transaction({
      member: req.body.member,
      days: req.body.days,
      // out_date: req.body.out_date,
      // due_date: req. body.due_date,
      // in_date: req.body.in_date,
      booklist: req.body.booklist
    })
    transaction.save((err, datatransactions) => {
      if (err) {
        res.send(err)
      } else {
        res.send({
          message: 'data berhsail di tambahkan',
          datatransactions: datatransactions
        })
      }
    })
  },
  update: (req, res) => {
    Transaction.update({_id: req.params.id}, {
      $set: req.body
    }, (err, dataTransactions) => {
      if (err) {
        res.send(err)
      } else {
        res.send(dataTransactions)
      }
    })
  },
  delete: (req, res) => {
    Transaction.remove({_id: req.params.id}, (err, dataTransactions) => {
      if (err) {
        res.send(err)
      } else {
        res.send({
          message: 'data berhasil di hapus',
          dataTransactions: dataTransactions
        })
      }
    })
  }
}
