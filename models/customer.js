'use strict';

const mongoose = require('mongoose');
const mongooseIncrement = require('mongoose-increment');
let Schema = mongoose.Schema

let customerSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  zipcode:String,
  phone:String
})

customerSchema.plugin(mongooseIncrement, {
  type:String,
  modelName: 'Customer',
  fieldName: 'memberid',
  prefix: 'CL-'
})

let Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
