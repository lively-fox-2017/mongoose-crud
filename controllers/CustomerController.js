const Customer = require('../models/Customer');

class CustomerController {

  static all (req, res) {

    const fetchAllCustomer = Customer.find();

    fetchAllCustomer.then((customers) => {

      res.status(200).json(customers);

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static create (req, res) {

    const newCustomer = {
      name: req.body.name,
      memberid: req.body.memberid,
      address: req.body.address,
      zipcode: req.body.zipcode,
      phone: req.body.phone
    };

    const insertCustomer = Customer.insertMany(newCustomer);

    insertCustomer.then((customer) => {

      res.status(201).json({
        message: 'customer successfully created',
        customer: customer
      });

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static getById (req, res) {

    const fetchCustomerById = Customer.findById(req.params.id);

    fetchCustomerById.then((customer) => {

      if (customer)
        res.status(200).json(customer);
      else
        res.status(404).json({ message: 'customer not found' });

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static updateById (req, res) {

    const fetchCustomerById = Customer.findById(req.params.id);

    // Fetch the customer
    fetchCustomerById.then((customer) => {

      if (customer) {

        const newCustomerInfo = {
          name: req.body.name || customer.name,
          memberid: req.body.memberid || customer.memberid,
          address: req.body.address || customer.address,
          zipcode: req.body.zipcode || customer.zipcode,
          phone: req.body.phone || customer.phone
        };

        const updateCustomerById = Customer.where({ _id: customer.id }).update(newCustomerInfo);

        // Update the customer
        updateCustomerById.then((status) => {

          res.status(200).json({
            message: 'customer successfully updated',
            status: status,
            value: customer,
            newValue: newCustomerInfo
          });

        }).catch((err) => {

          res.status(400).json({
            error: err.message
          });

        });

      } else {

        res.status(404).json({
          message: 'customer not found'
        });

      }

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

  static deleteById (req, res) {

    const fetchCustomerById = Customer.findById(req.params.id);

    // Fetch the customer
    fetchCustomerById.then((customer) => {

      if (customer) {

        const deleteCustomerById = Customer.deleteOne({ _id: customer.id });

        deleteCustomerById.then((status) => {

          res.status(200).json({
            message: 'customer successfully deleted',
            status: status,
            customer: customer
          });

        }).catch((err) => {

          res.status(400).json({
            error: err.message
          });

        });

      } else {

        res.status(404).json({
          message: 'customer not found'
        });

      }

    }).catch((err) => {

      res.status(400).json({
        error: err.message
      });

    });

  }

}

module.exports = CustomerController;
