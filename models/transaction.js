const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/library');

var Schema = mongoose.Schema;

var BookSchema = new Schema({
    member      : { type: Schema.Types.ObjectId, ref: 'Customer' },
    day         : { type: Number },
    out_date    : { type: Date, default: Date.now },
    due_date    : { type: Date, default: Date.now },
    in_date     : { type: Date, default: Date.now },
    fine        : { type: Number },
    booklist    : [{ type: Schema.Types.ObjectId, ref: 'Book' }]
    // cretedAt  : Date.now,
    // cretedAt  : Date.now
});

module.exports = mongoose.model('Transaction', BookSchema);
