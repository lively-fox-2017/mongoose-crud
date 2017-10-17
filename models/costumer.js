var mongoose = require('mongoose');
var Schema= mongoose.Schema,
    ObjectId=Schema.ObjectId;

  var Costumer=new Schema({
      name:String,
      memberid:String,
      address:String,
      zipcode:Number,
      phone:Number
  })

var dataCostumer = mongoose.model('dataCostumer',Costumer)

module.exports = dataCostumer;
