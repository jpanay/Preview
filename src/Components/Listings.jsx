import React from "react";
import Listing from "./Listing";
import axios from "axios";

let Listings = (props) => {
  let checkMongo = () => {
    axios
      .get("/listings")
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <div id="listings-wrapper">
      <div className="listing-controls">
        <div className="listing-control">Edit</div>
        <div className="listing-control">Add</div>
      </div>

      <div className="add-listing">
        <input className="" placeholder="address" />
        <input className="" placeholder="unit" />
        <input className="" placeholder="price" />
        <input className="" placeholder="beds" />
        <input className="" placeholder="baths" />
        <button>ADD</button>
      </div>

      <div id="listings" className="listings">
        <div className="listing listing-header">
          <div className="address">Address</div>
          <div className="unit">Unit</div>
          <div className="price">Price</div>
          <div className="beds">Bed</div>
          <div className="baths">Bath</div>
        </div>

        {props.listings.map(function (listing, i) {
          return <Listing obj={listing} key={i} listing={listing} />;
        })}

        <button onClick={checkMongo}> Click Me </button>
      </div>
    </div>
  );
};

export default Listings;
