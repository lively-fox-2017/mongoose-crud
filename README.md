# mongoose-crud
selasa siang, gunakan npm 'mongoose'
# CRUD functionality using mongoose-db
## Books
| Route           | Method   | Description   |
| ----------      |:------| :-------------|
| /books      |GET     |GET all books|
| /books      |POST    |Create a book    |
| /books/:isbn  |DELETE  |Delete a book using key value pairs    |
| /books/:isbn  |PUT     |Update a book with new info|
*provide info isbn, title, author, category, stock in body for PUT and POST method

## Customers
| Route           | Method   | Description   |
| ----------      |:------| :-------------|
| /customers      |GET     |GET all customer|
| /customers      |POST    |Create a customer    |
| /customers/:memberid  |DELETE  |Delete a customer using key value pairs    |
| /customers/:memberid  |PUT     |Update a customer with new info|
*provide info memberid, name, address, zipcode in body for PUT and POST method
*if memberid is not provided it will use system auto increment

## Transactions
| Route           | Method   | Description   |
| ----------      |:------| :-------------|
| /transactions      |GET     |GET all transactions|
| /transactions/borrow/:memberid      |POST    |Create a borrow transaction customer    |
| /transactions/return/:memberid  |POST  |Create a return transaction    |
| /transactions/:id  |DELETE     |Delete transaction detail|
| /transactions/:id |UPDATE | Update transaction (only for edit books or member, otherwise create new transaction)
*require memberid in params, arr of isbn in isbn form, and days for borrow
*only require memberid in params for return
