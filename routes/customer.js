var express = require('express');
var router = express.Router();
var Customer = require('../models/customer')
var db = 'mongodb://localhost/mongoose-library'
/* GET home page. */


router.get('/', function(req, res, next) {
  console.log('getting books')
  Customer.find({})
  .then((err,customer) => {
    if(err) {
      res.send(err)
    }
    res.send({
        message: 'customer list has been loaded',
        list: customer
    })
  })
});

router.post('/', (req,res) => {
    if(req.body.name && req.body.memberid && req.body.address && req.body.zipcode && req.body.phone !== '') {
        customer = new Customer({
            name: req.body.name,
            memberid: req.body.memberid,
            address: req.body.address,
            zipcode: req.body.zipcode,
            phone: req.body.phone
          })
        
          customer.save()
          .then((err, result) => {
            if(err) {
              res.send(err)
            }
            res.send({
                message: 'Customer has been added',
                added: result
            })
          })
    }
})

router.put('/:id', (req,res) => {
    if(req.body.name === '' || req.body.name !== undefined) {
        Customer.findOneAndUpdate({_id: req.params.id},{name: req.body.name}, (err, user) => {
            if(err) return console.log(err)
            
            res.send({
                message: 'user has been edited',
                user: user
            })
        })
    }
})

router.delete('/:id', (req,res) => {
    Customer.findOneAndRemove({_id: req.params.id}, (err,user) => {
        if(err) return console.log(err)

        res.send({
            message: 'user has been deleted',
            user: user
        })
    })
})

module.exports = router;
