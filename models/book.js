var mongoose = require('mongoose');
var Schema= mongoose.Schema,
    ObjectId=Schema.ObjectId;

  var Book=new Schema({
      isbn:String,
      title:String,
      author:String,
      category:String,
      stock:Number
  })

var dataBook = mongoose.model('dataBook',Book)

module.exports = dataBook;
