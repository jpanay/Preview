import mongoose from 'mongoose';
const { Schema } = mongoose;

const listingSchema = new Schema({
  location: String,
  manager: String,
  position: Object,
  unit: String,
  price: Number,
  beds: Number,
  baths: Number,
  description: String,
});

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing