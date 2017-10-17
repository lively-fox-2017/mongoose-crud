'use strict'
const models = require('./../models');

class TransactionController {
	static findAll(req, res) {
		models.Transaction.find().populate('member').populate('booklist').exec()
		.then(transactions => {
			res.status(200).send(transactions);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static findOne(req, res) {
		models.Transaction.findById(req.params.id).populate('member').populate('booklist').exec()
		.then(transaction => {
			res.status(200).send(transaction);
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static create(req, res) {
		const now = new Date();
		let due = new Date(now);
		due.setDate(due.getDate() + Number(req.body.days));

		let bookIds = Array.isArray(req.body.booklist) ? req.body.booklist : [req.body.booklist];
		
		// check member and books
		let iter = [];
		iter.push(models.Customer.findById(req.body.member).exec());
		bookIds.forEach(bookId => {
			iter.push(models.Book.findById(bookId).exec())
		});

		Promise.all(iter)
		.then(values => {
			const nullValue = values.indexOf(null);
			if (nullValue === 0) {
				return Promise.reject({
						status: 409,
						message: 'No member with such id'
					});
			} else if (nullValue !== -1) {
				return Promise.reject({
						status: 409,
						message: 'No book with such id'
					});
			} else {
				return Promise.resolve();
			}
		})
		.then(() => {
			const currentTransaction = {
				member: req.body.member,
				days: req.body.days,
				out_date: now.toISOString(),
				due_date: due.toISOString(),
				booklist: bookIds
			}

			return models.Transaction.create(currentTransaction)
		})
		.then(created => {
			res.status(200).send(created);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}

	static update(req, res) {
		models.Transaction.findById(req.params.id).exec()
		.then(transaction => {
			if (!transaction) return Promise.reject({
				status: 409,
				message: 'No such transaction'
			});
			const now = new Date();
			const due = new Date(transaction.due_date);
			const fine = (now - due) > 0 ? (now - due) * 1000 : 0;

			transaction.in_date = now.toISOString();
			transaction.fine = fine;

			return models.Transaction.update({_id: req.params.id}, transaction).exec();
		})
		.then(mresp => {
			res.status(200).send({
				message: `Transaction with ID ${req.params.id} successfully updated`,
				data: mresp
			});
		})
		.catch(err => {
			res.status(500).send(err);
		})
	}

	static delete(req, res) {
		models.Transaction.deleteOne({_id: req.params.id})
		.then(() => {
			res.status(200).send(`Transaction with ID ${req.params.id} successfully deleted`);
		})
		.catch(err => {
			res.status(500).send(err);
		});
	}
}

module.exports = TransactionController;