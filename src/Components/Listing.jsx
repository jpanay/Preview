import React from "react";

let Listing = (props) => {
  return (
    <div className="listing">
      <div className="listing-field location">{props.listing.location}</div>
      <div className="listing-field unit">{props.listing.unit}</div>
      <div className="listing-field price">${props.listing.price}</div>
      <div className="listing-field beds">{props.listing.beds}</div>
      <div className="listing-field baths">{props.listing.baths}</div>
      <div className="listing-field description">{props.listing.description}</div>
    </div>  
  )
}

export default Listing