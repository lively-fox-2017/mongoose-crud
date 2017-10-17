const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let transSchema = new Schema({
  member:{
     type: Schema.Types.ObjectId, ref: 'Customer'
  },
  days:{
    type: Number
  },
  out_date:{
    type: Date
  },
  due_date:{
    type: Date
  },
  in_date:{
    type: Date
  },
  fine:{
    type: Number
  },
  booklist:[{
    type: Schema.Types.ObjectId, ref: 'Book'
  }]

})

var Transaction = mongoose.model('Transaction', transSchema);

class Transactions {
  static getTransactions(callback) {
    Transaction.find()
    .populate("member")
    .populate("booklist")
    .exec(callback);
  };

  static addTransaction(body, callback) {

    var transaction = {
      member: body.member,
      days: body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      "fine": body.fine,
      "booklist": body.booklist
    }
    Transaction.create(transaction, callback);
  };

  static updateTransaction(params, body, callback) {
    var id = {
      _id : params.id
    }
    var update = {
      member: body.member,
      days: body.days,
      out_date: new Date(),
      due_date: new Date(),
      in_date: new Date(),
      "fine": body.fine,
      "booklist": body.booklist
    }
    Transaction.findByIdAndUpdate(id, update, callback);
  };

  static deleteTransaction(params, callback){
    var id = {
      _id : params.id
    }
    Transaction.deleteOne(id, callback)
  }
}


module.exports = Transactions;
