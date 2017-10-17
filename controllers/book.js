'use strict'
const models = require('./../models');

class BookController {
	static findAll(req, res) {
		models.Book.find().exec()
		.then(books => {
			res.status(200).send(books);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static findOne(req, res) {
		models.Book.findById(req.params.id).exec()
		.then(book => {
			res.status(200).send(book);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static create(req, res) {
		models.Book.create(req.body)
		.then(created => {
			res.status(200).send(created)
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static update(req, res) {
		models.Book.updateOne({_id: req.params.id}, req.body).exec()
		.then(mResponse => {
			res.status(200).send(mResponse);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static delete(req, res) {
		models.Book.deleteOne({_id: req.params.id})
		.then(() => {
			res.status(200).send(`ID ${req.params.id} successfully deleted`);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}
}

module.exports = BookController;