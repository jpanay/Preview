const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");
const { router } = require("./routes");
require("dotenv").config();
const API_KEY = process.env.API_KEY;

app.use(express.json());
app.use(express.static(__dirname + "/../dist"));

app.use("/hello", router);

app.listen(port, () => {
  console.log(`Example app listening at Port ${port}`);
});
