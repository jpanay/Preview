import React, { useEffect } from "react";
import ListingContainer from "../containers/ListingContainer";
import AddListingContainer from "../containers/AddListingContainer";
import FilterListingsContainer from "../containers/FilterListingsContainer";

let Listings = ({ listings, filteredListings }) => {
  return (
    <div id="listings-wrapper">
      <div className="display-6 mt-2 main-heading">PREVIEW</div>

      <div className="sub-heading">Filter</div>
      <FilterListingsContainer />

      <div className="sub-heading">Add Listing</div>
      <AddListingContainer />

      <div className="sub-heading">All Listings</div>
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

        {filteredListings.length > 0
          ? filteredListings.map(function (listing, i) {
              return <ListingContainer key={i} listing={listing} />;
            })
          : listings.map(function (listing, i) {
              return <ListingContainer key={i} listing={listing} />;
            })}
      </div>
    </div>
  );
};

export default Listings;
