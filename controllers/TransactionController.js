const Transaction = require('../models/Transaction');

class TransactionController {

  static all (req, res) {

    const fetchAllTransaction = Transaction.find().populate('member').populate('booklist');

    fetchAllTransaction.then((transactions) => {

      res.status(200).json(transactions);

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static getById (req, res) {

    const fetchTransactionById = Transaction.findById(req.params.id).populate('member').populate('booklist');

    fetchTransactionById.then((transaction) => {

      res.status(200).json(transaction);

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static new (req, res) {

    let outDate = new Date();
    let dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + (parseInt(req.body.days) || 1));

    const newTransaction = {
      member: req.body.member,
      booklist: req.body.booklist,
      days: req.body.days,
      out_date: outDate.toISOString(),
      due_date: dueDate,
      in_date: null,
      fine: null
    };

    const insertTransaction = Transaction.insertMany(newTransaction);

    insertTransaction.then((transaction) => {

      res.status(201).json({
        message: 'transaction successfully created',
        transaction: transaction
      });

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static finishById (req, res) {

     const fetchTransactionById = Transaction.findById(req.params.id);

     // Fetch the transaction
     fetchTransactionById.then((transaction) => {

       if (transaction) {

          let inDate = new Date();
          let dueDate = new Date(transaction.due_date);
          let diff = inDate.getDate() - dueDate.getDate();

          const newTransactionInfo = {
            in_date: inDate.toISOString(),
            fine: (diff > 0) ? diff * 1000 : 0
          };

          const updateTransaction = Transaction.where({ _id: transaction.id }).update(newTransactionInfo).then((status) => {

            res.status(200).json({
              message: 'transaction successfully updated',
              status: status,
              value: transaction,
              newValue: newTransactionInfo
            });

          }).catch((err) => {
            res.status(400).json({
              error: err.message
            });
          });

       } else {

         res.status(404).json({
           message: 'transaction not found'
         });

       }

     }).catch((err) => {

       res.status(400).json({
         error: err.message
       });

     });

  }

  static deleteById (req, res) {

    const fetchTransactionById = Transaction.findById(req.params.id);

    // Fetch the transaction
    fetchTransactionById.then((transaction) => {

      if (transaction) {

        const deleteTransactionById = Transaction.deleteOne({ _id: transaction.id });

        deleteTransactionById.then((status) => {

          res.status(200).json({
            message: 'transaction successfully deleted',
            status: status,
            transaction: transaction
          });

        });

      } else {

        res.status(404).json({
          message: 'transaction not found'
        });

      }

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

}

module.exports = TransactionController;
