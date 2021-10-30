import React from "react";

let Navigation = ({ changePage }) => (
  <header id="nav">
    <p onClick={() => changePage("listings")}>Listings</p>
    <p onClick={() => changePage("home")}>Agents</p>
    <p onClick={() => changePage("tools")}>Locations</p>
  </header>
);

export default Navigation;
