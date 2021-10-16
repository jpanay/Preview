const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/preview";
mongoose.Promise = Promise;

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch((error) => console.error(error));

const db = mongoose.connection;

module.exports = db;
