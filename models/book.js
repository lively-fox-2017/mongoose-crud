'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let BookSchema = new Schema({
	isbn: String,
	title: String,
	author: String,
	category: String,
	stock: Number
});

module.exports = mongoose.model('Book', BookSchema);