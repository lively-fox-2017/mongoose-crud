const mongoose = require ('mongoose')

const bookSchema = mongoose.Schema({
    isbn: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    stock: {
        type: Number,
        require: true
    }
})

const Book = mongoose.model('Book',bookSchema)

module.exports = Book