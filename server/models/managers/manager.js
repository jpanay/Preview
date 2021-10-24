const mongoose = require("mongoose");
const { Schema } = mongoose;

const ManagerSchema = new Schema({
  name: String,
  properties: Array,
});

const Manager = mongoose.model("Manager", ManagerSchema);

module.exports = Manager;
