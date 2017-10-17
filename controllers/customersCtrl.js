const model = require('../models/index');

class CustomerCtrl {
  static read(req, res, next) {
    model.Customer.find().then((data)=>{
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  static readOne(req, res, next){
    model.Customer.findOne({"_id":req.params.id}).then((data)=>{
      console.log(data)
      res.send(data);
    }).catch((err)=>{
      console.log(err);
    })
  }
  static create(req, res, next){
    model.Customer.create({
      name:req.body.name,
      memberid:req.body.memberid,
      address:req.body.address,
      zipcode:req.body.zipcode,
      phone:req.body.phone
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
    model.Customer.findOneAndUpdate({"_id":req.params.id},req.body).then((data)=>{
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
    model.Customer.findOneAndRemove({"_id":req.params.id}).then((data)=>{
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

module.exports = CustomerCtrl;
