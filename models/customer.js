'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema

let customerSchema = new Schema({
  name:{
    type:String,
    required:true
  },
  memberid:{
    type:String,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true
  },
  zipcode:String,
  phone:String
})

let Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;
