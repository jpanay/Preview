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

app.get("/listings", (req, res) => {
  res.send('Listing Data');
});

app.post("/listings", (req, res) => {
});

app.put("/listings", (req, res) => {
});

app.listen(port, () => {
  console.log(`Example app listening at Port ${port}`);
});
