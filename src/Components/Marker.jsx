import React from "react";

let Marker = (props) => (
  <div className="marker">
    {props.listing.location}
  </div>
);

export default Marker;