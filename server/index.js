const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");
require("dotenv").config();
const { router } = require("./routes");
const API_KEY = process.env.API_KEY2;

app.use(express.json());

app.use(express.static(__dirname + "/../dist"));

app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at Port ${port}`);
});
