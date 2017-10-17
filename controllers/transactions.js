const Transaksi = require('../models/transactions')

class Transaction {

  static findTransaction(req,res){
    Transaksi.find({}, function(err, transactions) {
    if (err) {
      res.send(err)
    } else {
      res.send(transactions)
    }
  });
  }

  static createTransaction(req,res){
    let newTransaction = Transaksi({
      "member": req.body.member,
      "days":req.body.days,
      "out_date":req.body.out_date,
      "due_date":req.body.due_date,
      "in_date":req.body.in_date,
      "fine":req.body.fine,
      "booklist":req.body.booklist,
    })
    newTransaction.save(function(err,transactions) {
      if(err) {
        res.send(err)
      } else {
        res.send(transactions);
      }
    })
  }
  //
  // static deleteBooks(req,res){
  //   Book.findOneAndRemove({ _id: req.params.id }, function(err, books) {
  //   if (err) throw err;
  //   res.send({
  //     "message": "Data Berhasil di Delete!",
  //     books: books
  //   })
  //   });
  // }
  //
  // static updateBooks(req,res){
  //   Book.findByIdAndUpdate({_id: req.params.id}, {
  //     "isbn": req.body.isbn,
  //     "title":req.body.title,
  //     "author":req.body.author,
  //     "category":req.body.category,
  //     "stock":req.body.stock
  //   },
  //   function(err, books) {
  //   if (err) throw err;
  //   res.send({
  //     "message": "Data Berhasil di Update!",
  //     books: books
  //   })
  //   })
  // }
}

module.exports = Transaction
