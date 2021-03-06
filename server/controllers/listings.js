var models = require("../models");
var listing = models.listing;

module.exports = {
  getAll: (req, res) => {
    return listing
      .getAll(req.query.manager)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  deleteListing: (req, res) => {
    return listing
      .deleteListing(req.body.listingID)
      .then(() => res.send("deleted listing"))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  editListing: (req, res) => {
    //clientSide:  {listingID: 212312aed123, updatedValues: {...}}
    console.log(req.body);
    return listing
      .editListing(req.body.listingID, req.body.updatedValues)
      .then(() => res.send("edited listing"))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
  createListing: (req, res) => {
    return listing
      .createListing(req.body.newListing)
      .then(() => res.sendStatus(200))
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
