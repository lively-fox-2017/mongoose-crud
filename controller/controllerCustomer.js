const Customer = require('../models/customer')

// GET ALL Customer
function getAllCustomer(req,res){
    Customer.find({})
    .then(function(row){
        res.send(row)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


// find One Customer
function findOneCustomer(req,res){
    Customer.findById(req.params.id)
    .then(function (row){
        res.send(row)
    })
    .catch(function (err) {
        res.status(500).send(row)
    })
}

// insert Customer
function insertCustomer(req,res){
    Customer.create({
        isbn: req.body.isbn,
        title: req.body.title,
        author: req.body.author,
        category: req.body.category,
        stock: parseInt(req.body.stock)
    })
    .then(function (data){
        res.send(data)
    })
    .catch(function (err){
        res.status(500).send(err)
    })
}

// Delete Customer
function deleteCustomer(req,res){
    Customer.deleteOne({
        _id: req.params.id
    })
    .then(function(row){
        res.send(row)
    })
    .catch(function(err){
        res.status(500).send(err)
    })
}


// Update Customer
function UpdateCustomer(req,res){
    Customer.findOneAndUpdate({
        _id: req.params.id
    })
    .then(function(result){
        res.send(result)
    })
    .catch(function(err){
        res.status(500).send(err)
    })
}


module.exports = {
    getAllCustomer,
    findOneCustomer,
    insertCustomer,
    deleteCustomer,
    UpdateCustomer
}

