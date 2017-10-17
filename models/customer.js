const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');

var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
    name          : { type:String },
    member_id     : { type:String },
    address       : { type:String },
    zipcode       : { type:Number },
    phone         : { type:String },
    // cretedAt  : Date.now,
    // cretedAt  : Date.now
});

module.exports = mongoose.model('Customer', CustomerSchema);
