const mongo = require('mongodb');
const moment = require('moment');

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
  },

  dataTransaction: (reqBody) => {
    let Obj = {
      member: reqBody.member,
      days: reqBody.days,
      out_date: new Date(),
      in_date: null,
      fine: 0,
      booklist: reqBody.booklist
    }

    Obj.due_date = moment(new Date(Obj.out_date)).add(Obj.days, 'days')

    return Obj
  },

  countFine: (in_date, due_date) => {
    let fine = 0
    let indateNum = moment(in_date).format('YYYYMMD')
    let duedateNum = moment(due_date).format('YYYYMMD')
    let hariDenda = indateNum - duedateNum

    if (hariDenda > 0) {
      fine = hariDenda * 1000
    }

    return fine
  }
}
