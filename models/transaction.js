'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TransactionSchema = new Schema({
	member: { type: Schema.Types.ObjectId, ref: 'Customer' },
	days: Number,
	out_date: Date,
	due_date: Date,
	in_date: Date,
	fine: Number,
	booklist: [{ type: Schema.Types.ObjectId, ref: 'Book' }]
});

module.exports = mongoose.model('Transaction', TransactionSchema);