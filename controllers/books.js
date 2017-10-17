var Book = require('../models/books');


class BookController{
  static getAll(req,res){
    Book.find({},(err,result)=>{
      res.json(200,{msg:'book list', data:result})
      // resolve(result)
    })
    // Books.getAll().then(result=>{
    //     res.json(200,{msg:'book list', data:result})
    // })
  }

  static addNew(req,res){
    let insert={
      isbn: req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category: req.body.category,
      stock:req.body.stock
    }
    Book.create(insert).then((result)=>{
      res.json(200,{msg:'new book', data:result})
    })
    // Books.addNew(insert).then(result=>{
    //     res.json(200,{msg:'new book', data:result})
    // })
  }

  static editData(req,res){
    let condition={
      _id : req.body.id
    }
    let newData={
        $set:{
          isbn: req.body.isbn,
          title: req.body.title  ,
          author: req.body.author,
          category: req.body.category ,
          stock: req.body.stock
        }
      }
      Book.update(condition,newData).then(result=>{
        res.json(200,{msg:"edited id", data:result})
      })
      // Books.editData(req.body.id,newData).then(result=>{
      //   res.json(200,{msg:"edited id", data:result})
      //   })
      }

  static deleteData(req,res){
    let condition={
      _id : req.body.id
    }
    Book.findOneAndRemove(condition).then(result=>{
      res.json(200,{msg:"deleted id", data:result})
      })
      // Books.deleteData(req.body.id).then(result=>{
      //   res.json(200,{msg:"deleted id", data:result})
      //   })
      }





}

module.exports = BookController;
