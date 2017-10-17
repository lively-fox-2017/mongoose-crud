var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Schema = mongoose.Schema;

var trxSchema = new Schema({
  member: {type:Schema.Types.ObjectId,ref:'Customer'},
  days:Number,
  out_date:Date,
  due_date: Date,
  in_date:Date,
  fine:Number,
  booklist:[{type:Schema.Types.ObjectId, ref:'Book'}]
});

var Transaction = mongoose.model('Transaction', trxSchema);

class Transactions{
  static getAll(){
    return new Promise(function(resolve, reject) {
      Transaction.find().populate('member').populate('booklist').then(result=>{
        resolve(result)
      })

    });
  }

  static editData(id,edit){
    let condition={
      _id : new mongoose.mongo.ObjectId(id)
    }
    return new Promise(function(resolve, reject) {
      Transaction.update(condition,edit).then(result=>{
        resolve(result)
      })

    });
  }

  static addNew(insert){
    let newTrx=Transaction(insert)
    return new Promise(function(resolve, reject) {
      newTrx.save(err=>{
        if(err){
          reject(err)
        }else{
          resolve(newTrx)
        }
      })
    });
  }

  static deleteData(id){
  let condition={
    _id : new mongoose.mongo.ObjectId(id)
  }
  return new Promise(function(resolve, reject) {
    Transaction.findOneAndRemove(condition).then(result=>{
      resolve(result)
      })
    });
  }


}


module.exports = Transactions;
