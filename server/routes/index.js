var express = require("express");
var router = express.Router();

router.get("/listings", (req, res) => {
  res.send('Listing Data');
});

router.post("/listings", (req, res) => {
});

router.put("/listings", (req, res) => {
});


module.exports.router = router;
