import React from "react";

let Listing = ({ listing, selectListing }) => (
  <>
    {listing.address !== "no matching filters" ? (
      <>
        <div
          onClick={() => selectListing(listing._id)}
          className="listing"
        >
          <div className="listing-field address">{listing.address}</div>
          <div className="listing-field unit">{listing.unit}</div>
          <div className="listing-field price">${listing.price}</div>
          <div className="listing-field beds">{listing.beds}</div>
          <div className="listing-field baths">{listing.baths}</div>
          <div
            className={ listing.occupied.toString().toLowerCase() + " listing-field occupied" } >
            {listing.occupied.toString().toLowerCase()}
          </div>
          <div
            className={ listing.previewed.toString().toLowerCase() + " listing-field previewed" } >
            {listing.previewed.toString().toLowerCase()}
          </div>
          <div
            className={ listing.listed.toString().toLowerCase() + " listing-field listed" } >
            {listing.listed.toString().toLowerCase()}
          </div>
          {/* <div className="listing-field description">{props.listing.description}</div> */}
        </div>
      </>
    ) : (
      <p>There are no listings that match this filter</p>
    )}
  </>
);

export default Listing;
