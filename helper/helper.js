const mongo = require('mongodb');
const mongoClient = mongo.MongoClient
const url = "mongodb://localhost:27017/admin";

module.exports = {
  // mongoDB role authenticate
  mongoAuth: {
    db: {
      authSource: 'admin'
    }
  }
}
