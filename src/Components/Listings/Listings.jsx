import React from "react";
import ListingContainer from "../../containers/Listings/ListingContainer";

import HandleManagers from "../Managers/HandleManagers";

let Listings = ({ listings, filteredListings, manager, handlingManagers }) => {
  return (
    <div id="listings-wrapper">
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
