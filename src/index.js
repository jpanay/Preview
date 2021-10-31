import React from "react";
import ReactDOM from "react-dom";
import App from "./Components/App";
import "./Styles/app.css";
import "./Styles/home.css";
import "./Styles/listings.css";
import "./Styles/tools.css";

import "./Styles/managers.css";
import "./Styles/map.css";
import "./Styles/infoModal.css";
import "./Styles/marker.css";
import "./Styles/nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import store from "./store";
import AppContainer from "./containers/AppContainer";
var mountNode = document.getElementById("app");
ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  mountNode
);
