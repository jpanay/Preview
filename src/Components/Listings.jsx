import React from "react";
import Listing from "./Listing";

let Listings = (props) => {
  return (
    <div>
      <div id="listings" className="sidebar listings">
        {props.listings.map(function(listing, i){
          return <Listing obj={listing} key={i} listing={listing} />;
        })}
      </div>
    </div>
  );
};

export default Listings;
