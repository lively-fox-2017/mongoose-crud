var Customer = require('../models/customer')

class customerCtrl{

    static getAddPage(req,res) {
        res.render('addCustomer', {title: 'Add a customer'})
    }

    static getEditPage(req,res) {
        Customer.findOne({_id: req.params.id})
        .then((user, err) => {
            // res.send(user)
            res.render('editCustomer', {title: 'Edit Customer', user:user})
        })
    }

    static get(req,res) {
        Customer.find({})
        .then((customer,err) => {
          if(err) {
            res.send(err)
          }
          res.render('customers', {title: 'Customers', customers: customer})
        //   res.send({
        //       message: 'customer list has been loaded',
        //       list: customer
        //   })
        })
    }

    static post(req,res) {
        if(req.body.name && req.body.memberid && req.body.address && req.body.zipcode && req.body.phone !== '') {
            var customer = new Customer({
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
                console.log('halo')
                res.redirect('/')
                // res.send({
                //     message: 'Customer has been added',
                //     added: result
                // })
              })
        }
    }

    static update(req,res) {
        if(req.body.name === '' || req.body.name !== undefined) {
            Customer.findOneAndUpdate({_id: req.params.id},{
                name: req.body.name,
                memberid: req.body.memberid,
                address: req.body.address,
                zipcode: req.body.zipcode,
                phone: req.body.phone
            })
            .then((user,err) => {
                if(err) return res.send(err)

                res.redirect('/customers')
            })
        }
    }

    static delete(req,res) {
        Customer.findOneAndRemove({_id: req.params.id})
        .then((user,err) => {
            if(err) return res.send(err)
            
            res.redirect('/customers')
        })
    }
}

module.exports = customerCtrl