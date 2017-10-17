let dataCostumer=require('../models/costumer')

let insertCostumer = function(req,res){
  dataCostumer.create({
    name:req.body.name,
    memberid:req.body.memberid,
    address:req.body.address,
    zipcode:req.body.zipcode,
    phone:req.body.phone
  },function(err,result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}

let viewCostumer = function(req,res){
  dataCostumer.find({} , function(err,user){
    if(!err){
      res.send(user)
    }else{
      res.send(err)
    }
  })
}

let deleteCostumer = function (req,res){
  dataCostumer.findByIdAndRemove(req.params.id,function(err){
    if(!err){
      res.send('Data Sudah Di Hapus')
    }else{
      res.send(err)
    }
  })
}

let updateCostumer= function(req,res){
  dataCostumer.findByIdAndUpdate(req.params.id,{
    name:req.body.name,
    memberid:req.body.memberid,
    address:req.body.address,
    zipcode:req.body.zipcode,
    phone:req.body.phone
  },function(err,result){
    if(!err){
      res.send(result)
    }else{
      res.send(err)
    }
  })
}


module.exports = {
  insertCostumer,viewCostumer,deleteCostumer,updateCostumer
};
