const mongoose = require("mongoose");
const { Schema } = mongoose;

const listingSchema = new Schema({
  manager: String,
  address: String,
  full_address: String,
  area: String,
  zipcode: String,
  position: Object,
  unit: String,
  price: Number,
  beds: Number,
  baths: Number,
  description: String,
  occupied: Boolean,
  previewed: Boolean,
  listed: Boolean,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
