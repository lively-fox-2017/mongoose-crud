var Collection = require('../models/collection')

class collectionCtrl{
    static get(req,res) {
        Collection.find({})
        .populate('member')
        .populate('booklist')
        .then((collection,err) => {
          if(err) {
            res.send(err)
          }
          res.send({
              message: 'collection list has been loaded',
              list: collection
          })
        })
    }

    static post(req,res) {
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
              .then((result, err) => {
                if(err) {
                  res.send(err)
                }
                res.send({
                    message: 'Collection has been added',
                    added: result
                })
              })
        }
    }

    static update(req,res) {
        if(req.body.member && req.body.days && req.body.fine && req.body.booklist !== '') {
            Customer.findOneAndUpdate({_id: req.params.id},{name: req.body.name}, (user, err) => {
                if(err) return console.log(err)
                
                res.send({
                    message: 'user has been edited',
                    user: user
                })
            })
        } else {
            res.redirect('/collections')
        }
    }

    static delete(req,res) {
        Customer.findOneAndRemove({_id: req.params.id}, (user,err) => {
            if(err) return console.log(err)
    
            res.send({
                message: 'user has been deleted',
                user: user
            })
        })
    }
}

module.exports = collectionCtrl