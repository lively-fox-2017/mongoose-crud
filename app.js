const express = require('express');
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const URI = 'mongodb://localhost/mongoose_library'

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const book = require('./routes/book')
const transactions = require('./routes/transaction')
const customer = require('./routes/customer')

app.use('/', book)
app.use('/transaction', transactions)
app.use('/customer', customer)

app.listen(3000, function(){
  console.log(`AYO JALAN!`)
})
