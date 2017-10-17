const mongoose = require ('mongoose')

const customerSchema = mongoose.Schema({
    name:{
        type: String,
        require: true
    },
    memberid: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    zipcode: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    }
})

const Customer = mongoose.model('Customer', customerSchema)

module.exports = Customer;