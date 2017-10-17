const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/library');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
});

module.exports = mongoose.model('Customer', customerSchema);
