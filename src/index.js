import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Styles/app.css";
import "./Styles/listings.css";
import "./Styles/map.css";
import "./Styles/infoModal.css";
import "./Styles/marker.css";
import "bootstrap/dist/css/bootstrap.min.css";

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
