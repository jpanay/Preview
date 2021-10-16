var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.get("/listings", controllers.listings.getAll);

module.exports = router;
