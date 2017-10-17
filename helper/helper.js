const mongo = require('mongodb');

module.exports = {
  // mongoDB role authenticate
  mongoAuth: {
    auth: {
      authdb: 'admin'
    }
  },

  dataBook: (reqBody) => {
    let Obj = {
      isbn: reqBody.isbn,
      title: reqBody.title,
      author: reqBody.author,
      category: reqBody.category,
      stock: reqBody.stock
    }

    return Obj
  }
}
