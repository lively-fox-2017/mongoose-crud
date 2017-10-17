'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TransactionSchema = new Schema({
	member: { 
		type: Schema.Types.ObjectId, 
		ref: 'Customer',
		required: [true, 'Why u no input member?']
	},
	days: Number,
	out_date: Date,
	due_date: Date,
	in_date: Date,
	fine: Number,
	booklist: {
		type: [{ type: Schema.Types.ObjectId, ref: 'Book' }],
		required: [true, 'Please input at least one book']
	}
});

module.exports = mongoose.model('Transaction', TransactionSchema);