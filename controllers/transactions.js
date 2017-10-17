const express = require('express')
const model = require('../models/transactions')
const ObjectId = require('mongodb').ObjectId

class Transactions {
	static findAll(req,res) {
		model.find({}, (err,docs) => {
			if(!err) {
				res.send(docs)	
			} else {
				res.send(err)
			} 			
		})
	}
	static findById(req,res) {
		model.find({_id:ObjectId(req.params.id)}, (err,doc) => {
			if(!err) {
				res.send(doc)	
			} else {
				res.send(err)
			} 			
		})
	}
	static add(req,res) {
		model.create(
			{
			    member    	: req.body.member,
			    days      	: req.body.days,
			    out_date    : req.body.out_date,
			    due_date	: req.body.due_date,
			    in_date		: req.body.in_date,
			    fine		: req.body.fine,
			    booklist	: req.body.booklist
			}, (err,result) => {
			if(!err) {
				res.send(result)	
			} else {
				res.send(err)
			} 			
		})
	}
	static edit(req,res) {
		model.updateOne(
			{ 
				_id : ObjectId(req.params.id)
			}, 
			{ 
				$set: { 
				    member    	: req.body.member,
				    days      	: req.body.days,
				    out_date    : req.body.out_date,
				    due_date	: req.body.due_date,
				    in_date		: req.body.in_date,
				    fine		: req.body.fine
				} 
			}, (err, result) => {
			if(!err) {
				res.send(result)
			} else {
				res.send(err)
			}
		}) 
	}
	static delete(req,res) {
		model.deleteOne({ _id: ObjectId(req.params.id) }, 
			(err, result) => {
			if(!err) {
				res.send(result)	
			} else {
				res.send(err)
			} 			
		});
	}
}
module.exports = Transactions