'use strict';

const Models = require('./models');

let books= [
  Models.Book({
    isbn:"978-1-60309-507",
    title:"Dragon Puncher",
    author:"James Kochalka",
    category: "All Ages",
    stock: 3
  }),
  Models.Book({
    isbn: "978-1-891830-77-8",
    title: "Every Girl is the End of the world for me",
    author: "jeffrey brown",
    category: "mature (16+)",
    stock: 5
  })
]

let customers = [
  Models.Customer({
    name:"Ruby Henjaya",
    memberid:"CL0001",
    address:"Ujung Berung Bandung",
    zipcode: "40294",
    phone: "08112237788"
  }),
  Models.Customer({
    name:"Riza Fahmi",
    memberid:"CL0002",
    address:"Something in jakarta",
    zipcode:"50022",
    phone:"081122336655"
  })
]

for(let i in books){
  books[i].save();
}

for(let i in customers){
  customers[i].save();
}
