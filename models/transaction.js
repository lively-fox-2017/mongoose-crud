var idvalidator = require('mongoose-id-validator');
var mongoose = require('mongoose');
var Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/library');
// mongoose.Promise = global.Promise;
var transactionSchema = new Schema({
  member: { type: Schema.Types.ObjectId, ref: 'Customer' , required: true},
  days: {type:Number, required: true},
  out_date: {type:Date, required: true},
  due_date: {type:Date},
  in_date: {type:Date},
  fine: {type:Number},
  booklist:[{type: Schema.Types.ObjectId, ref: 'Book', required: true}]
});

transactionSchema.pre('save', function(next){
  var date = new Date(this.out_date);
  date.setDate(date.getDate() + this.days);
  this.due_date = date;
  next();
})

transactionSchema.pre('findOneAndUpdate', function(next){
  this.findOne({"_id":this._conditions._id}).then((data)=>{
    console.log(data);
    var timeDiff = this._update.in_date.getTime() - data.due_date.getTime();
    var diffDays = 0;
    if(timeDiff>0){
      diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    }
    this.update({"_id":this._conditions._id}, {
      fine:diffDays*1000
    }).then(()=>{
      next()
    })
  })
})

transactionSchema.plugin(idvalidator)

var Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;
