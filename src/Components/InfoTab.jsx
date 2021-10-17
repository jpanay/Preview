import React from "react";

// InfoTab should have the ability to edit the current selected unit
// needs an edit function passed in, needs a function passed in: functions need to interact with Mongo based on the id
let InfoTab = ({ selectedListing }) => {
  const { address, unit, price, baths, beds, description } = selectedListing;
  return (
    <div className="info-tab">
      <div className="info-tab-content">
        <span className="close">&times;</span>
        <div>{address}</div>
        <div>{unit}</div>
        <div>${price}</div>
        <div>{beds}</div>
        <div>{baths}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default InfoTab;
