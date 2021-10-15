var express = require("express");
var router = express.Router();
const path = require("path");

router.get("/hello", (req, res) => {
  res.send("hello");
});

module.exports.router = router;
