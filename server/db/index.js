const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/preview";
mongoose.Promise = Promise;

const MONGO_URI = process.env.MONGO_URI
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.error(error));

const db = mongoose.connection;

module.exports = db;
