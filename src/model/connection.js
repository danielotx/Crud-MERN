require('dotenv').config();
const { MongoClient } = require('mongodb');

const MONGO_DB_URL = `mongodb://${process.env.HOST || 'mongodb'}:27017/desafio-ebytr`;
const DB_NAME = 'desafio-ebytr';
const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const connection = () => MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((e) => e.db(DB_NAME))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

  module.exports = connection;