const mongoose = require('mongoose')
const url = "mongodb://admin:admin@localhost:27017/library" // with mongoDB role authenticate
const helper = require('../helper/helper')
mongoose.connect(url, helper.mongoAuth)
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  memberid: {
    type: String,
    required: true,
    unique: true
  },
  address: String,
  zipcode: String,
  phone: Number
})

const customerModel = mongoose.model('Customer', schema)

module.exports = customerModel
