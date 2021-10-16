var models = require("../models");
var listing = models.listing;

module.exports = {
  getAll: (req, res) => {
    listing
      .getAll()
      .then((data) => {
        console.log(data);
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
        res.sendStatus(500);
      });
  },
};
