const Customer = require('../models/customers')

class CustomerCRUD {

    static findAll(req, res) {
        Customer.find((err, customers) => {
            if (err) {
                res.status(500).send(err)
            } else {
                res.status(200).send(customers)
            }
        })
    }

    static create(req, res) {
        let cust = new Customer(req.body)
        cust.save()
            .then(person => {
                res.send(person).status(200)
            })
            .catch(err => {
                res.send(err).status(500)
            })
    }

    static update(req, res) {
        Customer.findById(req.params.id)
            .then(person => {
                person.name = req.body.name || person.name;
                person.memberid = req.body.memberid || person.memberid;
                person.address = req.body.address || person.address;
                person.zipcode = req.body.zipcode || person.zipcode;
                person.phone = req.body.phone || person.phone;
                person.save()
                    .then(person => {
                        res.send(person).status(200)
                    })
            })
            .catch(err => {
                res.send(err)
            })
    }

    static delete(req, res) {
        Customer.findByIdAndRemove(req.params.id)
            .then((person) => {
                let message = {
                    msg: "Success remove",
                    person
                }
                res.send(message)
            })
            .catch(err => {
                res.send(err)
            })
    }
}
module.exports = CustomerCRUD;