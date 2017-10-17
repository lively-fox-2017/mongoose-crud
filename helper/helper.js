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
      booklist: reqBody.booklist
    }
    Obj.due_date = moment(new Date(Obj.out_date)).add(Obj.days, 'days')

    if (reqBody.in_date && Obj.in_date === null){
      Obj.in_date = new Date(reqBody.in_date)
    }

    let hariDenda = 0
    let indateNum = moment(reqBody.in_date).format('YYYYMMD')
    let duedateNum = moment(reqBody.due_date).format('YYYYMMD')

    if (Obj.in_date) {
      hariDenda = indateNum - duedateNum
    }

    Obj.fine = hariDenda * 1000

    return Obj
  }
}
