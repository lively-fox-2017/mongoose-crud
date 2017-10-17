const model = require('../models/index');

class TransactionCtrl {
  static read(req, res, next) {
    model.Transaction.find().populate(['member', 'booklist']).then((data)=>{
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  static readOne(req, res, next){
    model.Transaction.findOne({"_id":req.params.id}).populate(['member', 'booklist']).then((data)=>{
      console.log(data)
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  static update(req, res, next){
    var date = new Date()
    console.log(date);
    model.Transaction.findOneAndUpdate({"_id":req.params.id},{
      in_date:date
    }).then((data)=>{
      console.log(data)
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  static create(req, res, next){
    // model.Transaction.create({
    //   isbn:req.body.isbn,
    //   title:req.body.title,
    //   author:req.body.author,
    //   category:req.body.category,
    //   stock:parseInt(req.body.stock)
    // }).then((data)=>{
    //   var obj = {
    //     message: 'Insert Success',
    //     data:data
    //   }
    //   res.send(obj);
    // }).catch((err)=>{
    //   console.log(err);
    //   res.send(err);
    // })
    model.Transaction.create({
        member:req.body.customerId,
        days:req.body.days,
        out_date:Date.now(),
        due_date:Date.now(),
        booklist:req.body.bookId
    }).then((data)=>{
      var obj = {
        message: 'Insert Success',
        data:data
      }
      res.send(obj);
    }).catch((err)=>{
      console.log(err);
      res.send(err);
    })
  }
}

module.exports = TransactionCtrl;
