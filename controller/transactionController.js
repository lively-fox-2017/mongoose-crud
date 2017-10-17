const Transaction = require('../model/transactions')
const helper = require('../helper/helper')

module.exports = {
  findAll: (req, res) => {
    // 'title' = asc by title, '-title' = desc by title
    Transaction.find().sort('member').then((rowsTransaction) => {
      res.json({
        message: "Tampil Semua Data Transaction",
        data: rowsTransaction
      })
    }).catch((reason) => {
      res.json({
        message: reason
      })
    })
  }

  // findOne: (req, res) => {
  //   Transaction.findOne(req.params.id).then((rowTransaction) => {
  //     res.json({
  //       message: "Tampil Satu Data Transaction",
  //       data: rowTransaction
  //     })
  //   }).catch((reason) => {
  //     res.json({
  //       message: reason
  //     })
  //   })
  // },
  //
  // insert: (req, res) => {
  //   Transaction.insert(helper.dataTransaction(req.body)).then((rowTransactionInserted) => {
  //     res.json({
  //       message: "Memasukan Data",
  //       data: rowTransactionInserted
  //     })
  //   }).catch((reason) => {
  //     res.json({
  //       message: reason
  //     })
  //   })
  // },
  //
  // update: (req, res) => {
  //   Transaction.update(helper.dataTransaction(req.body), req.params.id).then((rowUpdateTransaction) => {
  //     res.json({
  //       message: "Update",
  //       data: rowUpdateTransaction
  //     })
  //   }).catch((reason) => {
  //     res.json({
  //       message: reason
  //     })
  //   })
  // },
  //
  // delete: (req, res) => {
  //   Transaction.delete(req.params.id).then((rowDeleteTransaction) => {
  //     res.json({
  //       message: "Deleted",
  //       data: rowDeleteTransaction
  //     })
  //   }).catch((reason) => {
  //     res.json({
  //       message: reason
  //     })
  //   })
  // }
}
