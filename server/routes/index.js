var express = require("express");
var router = express.Router();
var controllers = require("../controllers");

router.get("/listings", controllers.listings.getAll);

router.post("/listings", controllers.listings.createListing);

router.patch("/listings", controllers.listings.editListing);

router.delete("/listings", controllers.listings.deleteListing);

module.exports = router;
