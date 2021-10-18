import React from "react";
import Listing from "./Listing";
import AddListing from "./AddListing";
import FilterListings from "./FilterListings";

let Listings = ({ listings, selectListing }) => {
  return (
    <div id="listings-wrapper">
      <div className="display-6 mt-2">PREVIEW</div>

      <div className="heading">Filter</div>
      <FilterListings />

      <div className="heading">Add Listing</div>
      <AddListing />

      <div className="heading">All Listings</div>
      <div id="listings" className="container listings">
        <div className="row align-items-start listing-header">
          <div className="col-4 address">Address</div>
          <div className="col-1 unit">Unit</div>
          <div className="col-2 price">Price</div>
          <div className="col-1 beds">Bed</div>
          <div className="col-1 baths">Bath</div>
          <div className="col-1 occupied">Occ.</div>
          <div className="col-1 previewed">Prev.</div>
          <div className="col-1 listedn">List.</div>
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
