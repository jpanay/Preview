var express = require("express");
var router = express.Router();

router.get("/example", (req, res) => {
  res.send(process.env.API_KEY);
});
module.exports.router = router;
