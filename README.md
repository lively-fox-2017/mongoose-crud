# Library With Mongoose CRUD
Demo app with Mongoose.

## REST API

List of book routes:

| Route                    	| HTTP 		| Description            	|
|---------------------------|---------|-------------------------|
| `/api/books`						 	| GET  		| get all books 					|
| `/api/books/:id`					| GET  		| get a single book 			|
| `/api/books`						 	| POST 		| create a book						|
| `/api/books/:id`					| PUT  		| update a book						|
| `/api/books/:id`					| DELETE	| delete a book 					|

List of customer routes:

| Route                    	| HTTP 		| Description            	|
|---------------------------|---------|-------------------------|
| `/api/customers`					| GET  		| get all customers 			|
| `/api/customers/:id`			| GET  		| get a single customer 	|
| `/api/customers`					| POST 		| create a customer				|
| `/api/customers/:id`			| PUT  		| update a customer				|
| `/api/customers/:id`			| DELETE	| delete a customer 			|

List of transaction routes:

| Route                    	| HTTP 		| Description            	|
|---------------------------|---------|-------------------------|
| `/api/transactions`				| GET  		| get all transactions 		|
| `/api/transactions/:id`		| GET  		| get a single transaction|
| `/api/transactions`				| POST 		| create a transaction		|
| `/api/transactions/:id`		| PUT  		| update a transaction		|
| `/api/transactions/:id`		| DELETE	| delete a transaction 		|

***
## Usage
with only npm:
```
npm install
node app.js
```

Access the API via `http:localhost:3000/api`