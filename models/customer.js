var mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/library');
// mongoose.Promise = global.Promise;
var customerSchema = new Schema({
  name: {type:String, required: true},
  memberid: {type:String, required: true},
  address: {type:String, required: true},
  zipcode: {type:String, required: true},
  phone: {type:String, required: true, minlength:[10, "Minimum phone length 10"], maxlength:[13, "Maximum phone length 13"]},
});

var Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
