import React from "react";
import Listing from "./Listing";
import AddListing from "./AddListing";
import FilterListings from "./FilterListings";

let Listings = ({ listings, selectListing }) => {
  return (
    <div id="listings-wrapper">
      <FilterListings />
      <AddListing />
      
      <div id="listings" className="listings">
        <div className="listing listing-header">
          <div className="address">Address</div>
          <div className="unit">Unit</div>
          <div className="price">Price</div>
          <div className="beds">Bed</div>
          <div className="baths">Bath</div>
          <div className="">Occupied</div>
          <div className="">Previewed</div>
          <div className="">Listed</div>
        </div>

        {listings.map(function (listing, i) {
          return (
            <Listing
              selectListing={selectListing}
              obj={listing}
              key={i}
              listing={listing}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Listings;
