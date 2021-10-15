import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Styles/app.css";
import "./Styles/listings.css";
import "./Styles/listing.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
