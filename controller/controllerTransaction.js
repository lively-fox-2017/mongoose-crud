const Transaction = require('../models/transaction')
const Book = require('../models/Book')


//  all Transaction
function getAllTransaction(req, res){
    Transaction.find({})
    .populate('booklist')
    .then(rows =>{
        res.send(rows)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


// Find one Transaction
function findOneTransaction(req,res){
    Transaction.findById(req.params.id)
    .then(row =>{
        res.send(row)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


// insert Transaction 

function insertTransacktion (req, res){
    Transaction.create({
        memberid: req.body.memberid,
        days: req.body.days,
        out_date: req.body.out_date,
        due_date: req.body.due_date,
        in_date: req.body.in_date,
        fine: req.body.fine,
        booklist: req.body.booklist
    })
    .then(log =>{
        res.send(log)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


// update Transaction 

function updateTransaction(req, res){
    Transaction.findOneAndUpdate({
        _id: req.params.id
    },{
        memberid: req.body.memberid,
        days: req.body.days,
        out_date: req.body.out_date,
        due_date: req.body.due_date,
        in_date: req.body.in_date,
        fine: req.body.fine,
        booklist: req.body.booklist
    })
    .then(log=>{
        res.send(log)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


// delelete Transaction
function deleteTransaction (req, res){
    Transaction.deleteOne({
        _id: req.params.id
    })
    .then(log =>{
        res.send(log)
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


// Add Book Transacktion
function addBookTransaction(req,res){
    Transaction.findOneAndUpdate({
        _id: req.params.id
    },{
        $push:{
            booklist: req.body.book_id
        }
    })
    .then(log =>{
        Book.findById(req.body.book_id)
        .then(row =>{
            Book.findOneAndUpdate({
                _id: req.body.book_id
            },{
                stock: row.stock - 1
            })
            .then(log1 =>{
                res.send(log)
            })
        })
    })
    .catch(err =>{
        res.status(500).send(err)
    })
}


module.exports = {
    getAllTransaction,
    findOneTransaction,
    insertTransacktion,
    updateTransaction,
    deleteTransaction,
    addBookTransaction,



}