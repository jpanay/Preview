import React from "react";
import Listing from "./Listing";

let Listings = (props) => {
  return (
    <div id="listings-wrapper">
      <div id="listings" className="listings">
        {props.listings.map(function(listing, i){
          return <Listing obj={listing} key={i} listing={listing} />;
        })}
      </div>
    </div>
  );
};

export default Listings;
