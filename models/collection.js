var mongoose = require('mongoose');
var Customer = require('./customer')
var Book = require('./book')
var Schema = mongoose.Schema;

var CollectionSchema = new Schema({
    member: {type: Schema.Types.ObjectId, ref: 'Customer'},
    days: Number,
    out_date: {type: Date, default: Date.now },
    due_date: {type: Date, default: Date.now },
    in_date: {type: Date, default: Date.now },
    fine: Number,
    booklist: [{type: Schema.Types.ObjectId, ref: 'Book'}]
})

module.exports = mongoose.model('collection', CollectionSchema)