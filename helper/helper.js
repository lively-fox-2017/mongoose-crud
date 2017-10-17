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
  },

  dataCustomer: (reqBody) => {
    let Obj = {
      name: reqBody.name,
      memberid: reqBody.memberid,
      address: reqBody.address,
      zipcode: reqBody.zipcode,
      phone: reqBody.phone
    }

    return Obj
  }
}
