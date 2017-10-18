const express = require('express')
const app = express();
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongoose-crud')

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/*+json' }))
app.use(bodyParser.json({type: 'application/x-www-form-urlencoded'}))


const book = require('./routers/book')
const customer = require('./routers/customer')
const transaction = require('./routers/transaction')

app.get('/', function(req,res){
    res.send('Hallo Mongoose')
  })

app.use('/book', book)
app.use('/customer', customer)
app.use('/transaction', transaction)

app.listen(3000,()=>{
    console.log('Port 3000 Runing')
})