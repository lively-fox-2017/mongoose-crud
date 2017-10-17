const express = require('express')
const model = require('../models/customers')
const ObjectId = require('mongodb').ObjectId

class Customers {
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
				name: req.body.name,
				memberid: req.body.memberid,
				address: req.body.address,
				zipcode: req.body.zipcode,
				phone: req.body.phone
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
					name: req.body.name,
					memberid: req.body.memberid,
					address: req.body.address,
					zipcode: req.body.zipcode,
					phone: req.body.phone
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
module.exports = Customers