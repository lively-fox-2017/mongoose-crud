let mongoose = require('mongoose');
let Schema = mongoose.Schema 
let ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/library');
 
var booksSchema = new Schema({
    isbn    	: String,
    title    	: String,
    author      : String,
    category    : String,
    stock		: Number,
    createdAt	: Date
});
var Books = mongoose.model('Books', booksSchema);
module.exports = Books