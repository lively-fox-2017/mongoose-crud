var express = require('express');
var router = express.Router();
var Collection = require('../models/collection')
var db = 'mongodb://localhost/mongoose-library'
/* GET home page. */


router.get('/', function(req, res, next) {
  console.log('getting collection')
  Collection.find({})
  .populate('member')
  .populate('booklist')
  .then((err,collection) => {
    if(err) {
      res.send(err)
    }
    res.send({
        message: 'collection list has been loaded',
        list: collection
    })
  })
});

router.post('/', (req,res) => {
    if(req.body.member && req.body.days && req.body.fine && req.body.booklist !== '') {
        collection = new Collection({
            member: req.body.member,
            days: req.body.days,
            // out_date: req.body.outDate,
            // due_date: req.body.dueDate,
            // in_date: req.body.inDate,
            fine: req.body.fine,
            booklist: req.body.booklist
        })
        
          collection.save()
          .then((err, result) => {
            if(err) {
              res.send(err)
            }
            res.send({
                message: 'Collection has been added',
                added: result
            })
          })
    }
})

router.put('/:id', (req,res) => {
    if(req.body.member && req.body.days && req.body.fine && req.body.booklist !== '') {
        Customer.findOneAndUpdate({_id: req.params.id},{name: req.body.name}, (err, user) => {
            if(err) return console.log(err)
            
            res.send({
                message: 'user has been edited',
                user: user
            })
        })
    } else {
        res.redirect('/collections')
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
