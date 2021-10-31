import React from "react";

let Navigation = ({ changePage }) => (
  <header id="nav">
    <p onClick={() => changePage("home")}>Home</p>
    <p onClick={() => changePage("listings")}>Listings</p>
    <p onClick={() => changePage("tools")}>Tools</p>
  </header>
);

export default Navigation;
