import React from "react";

let Listing = ({ listing, selectListing }) => (
  <>
    {listing.address !== "no matching filters" ? (
      <>
        <div
          onClick={() => selectListing(listing._id)}
          className="row align-items-start listing"
        >
          <div className="col-4 listing-field address">{listing.address}</div>
          <div className="col-1 listing-field unit">{listing.unit}</div>
          <div className="col-2 listing-field price">${listing.price}</div>
          <div className="col-1 listing-field beds">{listing.beds}</div>
          <div className="col-1 listing-field baths">{listing.baths}</div>
          <div
            className={
              listing.occupied.toString().toLowerCase() +
              " col-1 listing-field occupied"
            }
          >
            {listing.occupied.toString().toLowerCase()}
          </div>
          <div
            className={
              listing.previewed.toString().toLowerCase() +
              " col-1 listing-field previewed"
            }
          >
            {listing.previewed.toString().toLowerCase()}
          </div>
          <div
            className={
              listing.listed.toString().toLowerCase() +
              " col-1 listing-field listed"
            }
          >
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
