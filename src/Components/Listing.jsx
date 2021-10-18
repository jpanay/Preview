import React from "react";

let Listing = ({ listing, selectListing }) => {
  return (
    <div onClick={() => selectListing(listing._id)} className="row align-items-start listing">
      <div className="col-4 listing-field address">{listing.address}</div>
      <div className="col-1 listing-field unit">{listing.unit}</div>
      <div className="col-2 listing-field price">${listing.price}</div>
      <div className="col-1 listing-field beds">{listing.beds}</div>
      <div className="col-1 listing-field baths">{listing.baths}</div>
      <div className="col-1 listing-field occupied">{listing.occupied.toString().toLowerCase()}</div>
      <div className="col-1 listing-field previewed">{listing.previewed.toString().toLowerCase()}</div>
      <div className="col-1 listing-field listed">{listing.listed.toString().toLowerCase()}</div>
      {/* <div className="listing-field description">{props.listing.description}</div> */}
    </div>
  );
};

export default Listing;
