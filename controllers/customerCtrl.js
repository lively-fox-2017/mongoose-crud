const Customer = require('../models/customer');

class CustomerCtrl {
  static getCustomers(req, res) {
    Customer.find()
      .then(customers => {
        res.status(200).send(customers);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static getCustomer(req, res) {
    Customer.findOne({
        memberid: req.params.memberid
      })
      .then(book => {
        res.status(200).send(book);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static createCustomer(req, res) {
    let newCustomer = new Customer(req.body);
    newCustomer.save()
      .then(value => {
        res.status(201).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static deleteCustomer(req, res) {
    Customer.deleteOne({
        memberid: req.params.memberid
      })
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }

  static updateCustomer(req, res) {
    Customer.updateOne({
        memberid: req.params.memberid
      }, req.body)
      .then(value => {
        res.status(200).send(value);
      })
      .catch(reason => {
        res.status(400).send(reason);
      })
  }
}

module.exports = CustomerCtrl;
