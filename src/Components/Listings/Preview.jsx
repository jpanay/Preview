import React from "react";
import GoogleMapContainer from "../../containers/Map/GoogleMapContainer";
import ListingsContainer from "../../containers/Listings/ListingsContainer";
import InfoModalContainer from "../../containers/Modal/InfoModalContainer";
import ActionBar from "./ActionBar"

let Preview = () => {
  return (
    <>
      <div>Preview</div>
      <div id="listings-container">
        <ActionBar />
        <div id="listings-subcontainer">
          <ListingsContainer />
          <GoogleMapContainer />
          <InfoModalContainer />
        </div>
      </div>
    </>
  );
};

export default Preview;
