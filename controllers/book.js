const dataBook= require('../models/book')

let insertBook=function(req,res){
  dataBook.create({
    isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    stock:req.body.stock
  },function(err,result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let viewBook=function(req,res){
  dataBook.find({},function(err,result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let deleteBook=function(req,res){
  dataBook.findByIdAndRemove(req.params.id,function(err){
    if(!err){
      res.send('data sudah Dihapus')
    }else{
      res.send(err)
    }
  })
}

let updateBook=function(req,res){
  dataBook.findByIdAndUpdate(req.params.id,{
    isbn:req.body.isbn,
    title:req.body.title,
    author:req.body.author,
    category:req.body.category,
    stock:req.body.stock
  },function(err,result){
    if(!err){
      res.send('data Sudah D Edit Bossku')
    }else{
      res.send(err)
    }
  })
}

module.exports = {
  insertBook,
  viewBook,
  deleteBook,
  updateBook
};
