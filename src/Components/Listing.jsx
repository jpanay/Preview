import React from "react";

let Listing = ({ listing, selectListing }) => {
  return (
    <div onClick={() => selectListing(listing._id)} className="listing">
      <div className="listing-field address">{listing.address}</div>
      <div className="listing-field unit">{listing.unit}</div>
      <div className="listing-field price">${listing.price}</div>
      <div className="listing-field beds">{listing.beds}</div>
      <div className="listing-field baths">{listing.baths}</div>
      <div className="listing-field occupied">{listing.occupied.toString().toLowerCase()}</div>
      <div className="listing-field previewed">{listing.previewed.toString().toLowerCase()}</div>
      <div className="listing-field listed">{listing.listed.toString().toLowerCase()}</div>
      {/* <div className="listing-field description">{props.listing.description}</div> */}
    </div>
  );
};

export default Listing;
