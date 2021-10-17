const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const axios = require("axios");
const router = require("./routes");
require("dotenv").config();
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const db = require("./db");
app.use(express.json());
app.use(express.static(__dirname + "/../dist"));
app.use("/", router);

app.listen(port, () => {
  console.log(`Example app listening at Port ${port}`);
});
