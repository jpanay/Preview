import React from "react";
import ListingContainer from "../../containers/Listings/ListingContainer";
import AddListingContainer from "../../containers/Listings/AddListingContainer";
import FilterListingsContainer from "../../containers/Listings/FilterListingsContainer";
import HandleManagers from "../Managers/HandleManagers";

let Listings = ({ listings, filteredListings, manager, handlingManagers }) => {
  return (
    <div id="listings-wrapper">

      <div className="sub-heading">Filter</div>
      <FilterListingsContainer />

      {handlingManagers ? (
        <>
          <div className="sub-heading">Manage Managers</div>
          <HandleManagers />
        </>
      ) : (
        <>
          <div className="sub-heading">Add Listing</div>
          <AddListingContainer />
        </>
      )}
      
      <div id="listings">
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
