import React from "react";

let Navigation = ({ changePage }) => (
  <>
    <div id="nav">
      <img id="nav-logo" src="logo-white.png" alt="Compass / Jason Panay" />
      <div id="nav-items">
        <p onClick={() => changePage("home")}>Home</p>
        <p onClick={() => changePage("listings")}>Listings</p>
        <p onClick={() => changePage("tools")}>Tools</p>
      </div>
    </div>
  </>
);

export default Navigation;
