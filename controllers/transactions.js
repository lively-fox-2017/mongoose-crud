const Models = require('../models');
const mongodb = require('mongodb');
const diffDays = require('../helpers/diffDays');

class Transaction{
  static getAll(req, res){
    Models.Transaction.find({}).populate('member').populate('booklist').then((data)=>{
      let result = {
        message:'Status OK',
        data:data
      }
      res.status(200).json(result)
    })
  }

  static borrowBook(req, res){

    Models.Book.find({isbn:{$in: req.body.isbn}}).then((books)=>{
      let bookIds = books.map((item) => {return item._id});

      Models.Customer.findOne({memberid:req.params.memberid}, function(err, customer){
        if(err || !customer){
          let result={
            message:'Bad request',
            data:{err}
          }
          res.status(400).json(result)
        }else{
          let transactionDetail={
            member:customer._id,
            days: req.body.days,
            out_date: new Date(),
            booklist:bookIds
          }
          transactionDetail.due_date = new Date();
          transactionDetail.due_date.setDate(transactionDetail.out_date.getDate()+parseInt(transactionDetail.days))
          Models.Transaction(transactionDetail).save(function(err){
            console.log(err);
            if(err){
              let result={
                message:'Bad request',
                data:{err}
              }
              res.status(400).json(result)
            }else{
              //Models.Customer.populate()
              let result={
                message:'Berhasil input',
                data:transactionDetail
              }
              res.status(201).json(result)
            }
          })
        }
      })
    })

  }

  static returnBook(req,res){
    Models.Customer.findOne({memberid:req.params.memberid}).then((customer)=>{
      // res.send(mongodb.ObjectId(customer._id))
      // console.log(mongodb.ObjectId(customer._id));
      Models.Transaction.findOne({member:mongodb.ObjectId(customer._id), in_date:null}).populate('member').populate('booklist').then((transaction)=>{
        transaction.in_date= new Date();
        let offsetDay = diffDays(transaction.in_date, transaction.due_date);
        if(offsetDay<0){
          transaction.fine = Math.abs(offsetDay)*5000;
        }else{
          transaction.fine = 0;
        }
        transaction.save().then((tr)=>{
          res.status(200).json(transaction)
        })
      }).catch((err)=>{
        res.send(err)
      })
    }).catch((err)=>{
      res.send(err)
    })
  }

  static deleteById(req, res){
    Models.Transaction.findOne({_id:mongodb.ObjectId(req.params.id)}).then((transaction)=>{
      //res.send(transaction)
      if(transaction){
        transaction.remove()
        res.status(200).json({message:"deleted", data:{}})
      }else{
        res.status(400).json({message:'Bad request', data:{}})
      }
    }).catch((err)=>{
      res.status(500).json({message:'internal server error', data:{err:err}})
    })
  }
}

module.exports = Transaction;
