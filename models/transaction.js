var mongoose = require('mongoose');
var Schema= mongoose.Schema,
    ObjectId=Schema.ObjectId;

  var Transaction=new Schema({
      member:[{type:Schema.Types.ObjectId,ref:'dataCostumer'}],
      days:Number,
      out_date:{type:Date,default:Date.now},
      due_date:{type:Date,default:Date.now},
      in_date:{type:Date,default:Date.now},
      fine:Number,
      booklist:[{type:Schema.Types.ObjectId,ref:'dataBook'}]
  })

var dataTransaction = mongoose.model('dataTransaction',Transaction)
module.exports = dataTransaction;
