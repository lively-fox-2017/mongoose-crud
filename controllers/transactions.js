const Transaction = require('../models/transactions')

class TransactionCRUD{
    static findAll(req, res){
        Transaction.find()
        .populate("member")
        .populate("booklist")
        .then(trans=>{
            res.send(trans)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static create(req, res){
        let trans = new Transaction(req.body)
        trans.save()
        .then(trans=>{
            res.send(trans)
        })
        .catch(err=>{
            res.send(err)
        })
    }

    static update(req, res) {
        Transaction.findById(req.params.id)
            .then(trans => {
                trans.member = req.body.member || trans.member;
                trans.day = req.body.day || trans.day;
                trans.fine = req.body.fine || trans.fine;
                trans.booklist = req.body.booklist || trans.booklist;
                trans.save()
                    .then(trans => {
                        res.send(trans).status(200)
                    })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Transaction.findByIdAndRemove(req.params.id)
            .then((trans) => {
                let message = {
                    msg: "Success remove",
                    trans
                }
                res.send(message)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = TransactionCRUD;