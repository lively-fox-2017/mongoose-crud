const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    isbn      : { type:String },
    title     : { type:String },
    author    : { type:String },
    category  : { type:String },
    stock     : { type:Number },
    // cretedAt  : Date.now,
    // cretedAt  : Date.now
});

module.exports = mongoose.model('Book', BookSchema);
