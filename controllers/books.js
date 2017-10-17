const express = require('express')
const model = require('../models/books')
const ObjectId = require('mongodb').ObjectId

class Books {
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
				"isbn"  	: req.body.isbn,
				"title" 	: req.body.title,
				"author" 	: req.body.author,
				"category" 	: req.body.category,
				"stock"		: req.body.stock
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
					"isbn"  	: req.body.isbn,
					"title" 	: req.body.title,
					"author" 	: req.body.author,
					"category" 	: req.body.category,
					"stock"		: req.body.stock
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
module.exports = Books