# REST API with Mongodb
Simple REST API implements HTTP Verbs using Mongodb with Mongoose ODM.

Documentation for This REST API:
## Books API
METHOD | ROUTE | DESCRIPTION
--- | --- |  ---
GET | /api/books | Get all the books info
GET | /api/books/:isbn | Get a single book info
POST | /api/books/ | Create a book
DELETE | /api/books/:isbn | Delete a book
PUT | /api/books/:isbn | Update a book with new info

## Customer API
METHOD | ROUTE | DESCRIPTION
--- | --- |  ---
GET | /api/customers | Get all the customers info
GET | /api/customers/:memberid | Get a single customer info
POST | /api/customers/ | Create a customer
DELETE | /api/customers/:memberid | Delete a customer
PUT | /api/customers/:memberid | Update a customer with new info

## Transaction API
METHOD | ROUTE | DESCRIPTION
--- | --- |  ---
GET | /api/transactions | Get all the transactions info
GET | /api/transactions/:transactionId | Get a single transaction info
POST | /api/transactions/ | Create a transaction (Required Body Post: member._Id_, out_date, booklist, days)
