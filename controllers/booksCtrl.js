const model = require('../models/index');

class BookCtrl {
  static read(req, res, next) {
    model.Book.find().then((data)=>{
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  static readOne(req, res, next){
    model.Book.findOne({"_id":req.params.id}).then((data)=>{
      console.log(data)
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  static create(req, res, next){
    model.Book.create({
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:parseInt(req.body.stock)
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
  static update(req, res, next){
    model.Book.findOneAndUpdate({"_id":req.params.id},{
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:parseInt(req.body.stock)
    }).then((data)=>{
      var obj = {
        message: 'Update Success',
        data:data
      }
      res.send(obj);
    }).catch((err)=>{
      console.log(err);
      res.send(err);
    })
  }
  static delete(req, res, next){
    model.Book.findOneAndRemove({"_id":req.params.id}).then((data)=>{
      var obj = {
        message: 'Delete Success',
        data:data
      }
      res.send(obj);
    }).catch((err)=>{
      console.log(err);
      res.send(err)
    })
  }
}

module.exports = BookCtrl;
