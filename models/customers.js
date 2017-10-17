var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Schema = mongoose.Schema;

var customerSchema = new Schema({
  name: String,
  memberid:String,
  address:String,
  zipcode: String,
  phone:String
});

var Customer = mongoose.model('Customer', customerSchema);

class Customers{
  static getAll(){
    return new Promise(function(resolve, reject) {
      Customer.find({},(err,result)=>{
        resolve(result)
      })
    });
  }

  static editData(id,edit){
    let condition={
      _id : new mongoose.mongo.ObjectId(id)
    }
    return new Promise(function(resolve, reject) {
      Customer.update(condition,edit).then(result=>{
        resolve(result)
      })

    });
  }

  static addNew(insert){
    let newCustomer=Customer(insert)
    return new Promise(function(resolve, reject) {
      newCustomer.save(err=>{
        if(err){
          reject(err)
        }else{
          resolve(newCustomer)
        }
      })
    });
  }

  static deleteData(id){
  let condition={
    _id : new mongoose.mongo.ObjectId(id)
  }
  return new Promise(function(resolve, reject) {
    Customer.findOneAndRemove(condition).then(result=>{
      resolve(result)
      })
    });
  }


}


module.exports = Customers;
