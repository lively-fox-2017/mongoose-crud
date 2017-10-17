'use strict'
const models = require('./../models');

class CustomerController {
	static findAll(req, res) {
		models.Customer.find().exec()
		.then(customers => {
			res.status(200).send(customers);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static findOne(req, res) {
		models.Customer.findById(req.params.id).exec()
		.then(customer => {
			res.status(200).send(customer);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static create(req, res) {
		models.Customer.create(req.body)
		.then(created => {
			res.status(201).send(created)
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static update(req, res) {
		models.Customer.updateOne({_id: req.params.id}, req.body).exec()
		.then(mResponse => {
			res.status(200).send(mResponse);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static delete(req, res) {
		models.Customer.deleteOne({_id: req.params.id})
		.then(() => {
			res.status(200).send(`Customer with ID ${req.params.id} successfully deleted`);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}
}

module.exports = CustomerController;