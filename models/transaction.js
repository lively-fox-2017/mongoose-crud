'use strict';
const mongoose = require('mongoose');
let Schema = mongoose.Schema;
//const Customer = require('./customer');

let transactionSchema = new Schema({
  member:{
    type:Schema.Types.ObjectId,
    ref:'Customer',
    required: true
  },
  days:{
    type:Number,
    required:true
  },
  out_date: {
    type:Date,
    required:true,
  },
  due_date: Date,
  in_date: Date,
  fine: Number,
  booklist:[{type:Schema.Types.ObjectId, ref:'Book', required:true}]
})


transactionSchema.statics.findOneOrCreate = function findOneOrCreate(condition, doc, callback) {
  const self = this;
  self.findOne(condition, (err, result) => {
    return result
      ? callback(err, result)
      : self.create(doc, (err, result) => {
        return callback(err, result);
      });
  });
};

let Transaction= mongoose.model('Transaction', transactionSchema)

module.exports = Transaction;
