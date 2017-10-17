# Mongoose CRUD

List of book routes:

| Route                   | HTTP   | Description                                        |
|-------------------------|--------|--------------------------------------|
| `/api/books`                  | GET    | Get all books                          |
| `/api/books/:id`          | GET    | Get a book                                    |
| `/api/books/`                 | POST   | Create a book                                            |
| `/api/books/:id`          | DELETE | Delete a book                                                |
| `/api/books/:id`          | PUT      | Update a book with new info                    |
*note _id as param*


List of customer routes:

| Route                   | HTTP   | Description                                        | Required Param
|-------------------------|--------|--------------------------------------|
| `/api/customers`                  | GET    | Get all customers                          | |
| `/api/customers/:id`          | GET    | Get a customers                                    | |
| `/api/customers/`                 | POST   | Create a customers                                            | name, memberid, address, zipcode, phone |
| `/api/customers/:id`          | DELETE | Delete a customers                                                | |
| `/api/customers/:id`          | PUT      | Update a customers with new info                    | | |
*note _id as param*


List of transaction routes:

| Route                   | HTTP   | Description                                        |Required Param
|-------------------------|--------|--------------------------------------|
| `/api/transactions`                  | GET    | Get all transactions                          | |
| `/api/transactions/`                 | POST   | Create a transactions                                            | customerId, bookId(Array), days  |
| `/api/transactions/:id`                 | GET   | Get a transactions                                            |  |
| `/api/transactions/:id`                 | PUT   | Update transaction (return book)| | |
*note _id as param*

Access the website via `http://localhost:3000` or API via `http:localhost:3000/api`
