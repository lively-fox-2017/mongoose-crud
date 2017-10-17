let mongoose = require('mongoose')
let Schema = mongoose.Schema 
let ObjectId = Schema.ObjectId;
mongoose.connect('mongodb://localhost/library');
var customersSchema = new Schema({
	name: String,
	memberid: String,
	address: String,
	zipcode: String,
	phone: String
})
var Customers = mongoose.model('Customers', customersSchema);
module.exports = Customers