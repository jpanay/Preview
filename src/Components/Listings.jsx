import React from "react";
import Listing from "./Listing";

let Listings = (props) => {
  return (
    <div id="listings-wrapper">

      <div className="listing-controls">
        <div className="listing-control">Edit</div>
        <div className="listing-control">Add</div>
      </div>

      <div className="add-listing">
        <input className="listing-input" placeholder="location"/>
        <input className="listing-input" placeholder="unit"/>
        <input className="listing-input" placeholder="price"/>
        <input className="listing-input" placeholder="beds"/>
        <input className="listing-input" placeholder="baths"/>
        <button>ADD</button>
      </div>

      <div id="listings" className="listings">
        <div className="listing listing-header">
          <div className="listing-field location">Location</div>
          <div className="listing-field unit">Unit</div>
          <div className="listing-field price">Price</div>
          <div className="listing-field beds">Bed</div>
          <div className="listing-field baths">Bath</div>
        </div> 

        {props.listings.map(function(listing, i){
          return <Listing obj={listing} key={i} listing={listing} />;
        })}
        
      </div>
    </div>
  );
};

export default Listings;
