const mongoose = require("mongoose");
const { Schema } = mongoose;

const ManagerSchema = new Schema({
  name: String,
  contact: String,
  Location: String,
});

const Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;
