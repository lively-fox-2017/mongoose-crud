# mongoose-crud
Restful API with MongoDB (using Mongoose)

## Book routes:
| Route             | HTTP          | Description                   |
| ----------------- | ------------- | ----------------------------- |
| `/api/books`      | GET           | Get all the books             |
| `/api/books`      | POST          | Create a book                 |
| `/api/books/:id`  | GET           | Get a single book             |
| `/api/books/:id`  | DELETE        | Delete a book                 |
| `/api/books/:id`  | PUT           | Update a book with a new info |

## Customer routes:
| Route                 | HTTP          | Description                       |
| --------------------- | ------------- | --------------------------------- |
| `/api/customers`      | GET           | Get all the customers             |
| `/api/customers`      | POST          | Create a customer                 |
| `/api/customers/:id`  | GET           | Get a single customer             |
| `/api/customers/:id`  | DELETE        | Delete a customer                 |
| `/api/customers/:id`  | PUT           | Update a customer with a new info |

## Transaction routes:
| Route                   | HTTP          | Description                         |
| ----------------------- | ------------- | ---------------------------------   |
| `/api/transactions`     | GET           | Get all the transactions            |
| `/api/transactions`     | POST          | Create a transaction                |
| `/api/transactions/:id` | GET           | Get a single transaction            |
| `/api/transactions/:id` | DELETE        | Delete a transaction                |
| `/api/transactions/:id` | PATCH         | Update transaction (returns a book) |

Access the API via [http://dimitri-mongoose-crud.herokuapp.com](http://dimitri-mongoose-crud.herokuapp.com)
