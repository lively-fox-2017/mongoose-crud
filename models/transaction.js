'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TransactionSchema = new Schema({
	member: Schema.Types.ObjectId,
	days: Number,
	out_date: Date,
	due_date: Date,
	in_date: Date,
	fine: Number,
	booklist: []
});

module.exports = mongoose.model('Transaction', TransactionSchema);