var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/library');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
  isbn: String,
  title:String,
  author:String,
  category: String,
  stock:Number
});

var Book = mongoose.model('Book', bookSchema);

// class Books{
//   static getAll(){
//     return new Promise(function(resolve, reject) {
//       Book.find({},(err,result)=>{
//         resolve(result)
//       })
//     });
//   }
//
//   static editData(bookid,edit){
//     let condition={
//       _id : new mongoose.mongo.ObjectId(bookid)
//     }
//     return new Promise(function(resolve, reject) {
//       Book.update(condition,edit).then(result=>{
//         resolve(result)
//       })
//
//     });
//   }
//
//   static addNew(insert){
//     let newBook=Book(insert)
//     return new Promise(function(resolve, reject) {
//       newBook.save(err=>{
//         if(err){
//           reject(err)
//         }else{
//           resolve(newBook)
//         }
//       })
//     });
//   }
//
//   static deleteData(id){
//   let condition={
//     _id : new mongoose.mongo.ObjectId(id)
//   }
//   return new Promise(function(resolve, reject) {
//     Book.findOneAndRemove(condition).then(result=>{
//       resolve(result)
//       })
//     });
//   }
//
//
// }


module.exports = Book;
