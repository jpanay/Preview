let Listing = require("./listing");

module.exports = {
  getAll: () => {
    return Listing.find({});
  },
  deleteListing: (listingID) => {
    return Listing.findByIdAndDelete(listingID);
  },
  editListing: (listingID, updatedValues) => {
    return Listing.findByIdAndUpdate(listingID, updatedValues);
  },
  createListing: (newListing) => {
    return Listing.create(newListing);
  },
};
