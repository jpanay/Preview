let Listing = require("./listing");

module.exports = {
  getAll: () => {
    return Listing.find({});
  },
};
