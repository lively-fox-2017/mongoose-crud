var mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/library');
// mongoose.Promise = global.Promise;
var customerSchema = new Schema({
  name: {type:String},
  memberid: {type:String},
  address: {type:String},
  zipcode: {type:String},
  phone: {type:String},
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
