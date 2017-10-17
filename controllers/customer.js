var Customer = require('../models/customer')

class customerCtrl{
    static get(req,res) {
        Customer.find({})
        .then((customer,err) => {
          if(err) {
            res.send(err)
          }
          res.send({
              message: 'customer list has been loaded',
              list: customer
          })
        })
    }

    static post(req,res) {
        if(req.body.name && req.body.memberid && req.body.address && req.body.zipcode && req.body.phone !== '') {
            customer = new Customer({
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
              })
            
              customer.save()
              .then((result, err) => {
                if(err) {
                  res.send(err)
                }
                res.send({
                    message: 'Customer has been added',
                    added: result
                })
              })
        }
    }

    static update(req,res) {
        if(req.body.name === '' || req.body.name !== undefined) {
            Customer.findOneAndUpdate({_id: req.params.id},{name: req.body.name}, (user, err) => {
                if(err) return console.log(err)
                
                res.send({
                    message: 'user has been edited',
                    user: user
                })
            })
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

module.exports = customerCtrl