var mongoose = require('mongoose');


var customerSchema = mongoose.Schema({
  name: String,
  memberid: String,
  address: String,
  zipcode: String,
  phone: String
})

// customerSchema.pre('save', function(next) {
//   var currentDate = new Date()
//
//   this.updated_at = currentDate
//
//   if (!this.created_at)
//     this.created_at = currentDate
// })

var Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;
