import React from "react";
import GoogleMapContainer from "../../containers/Map/GoogleMapContainer";
import ListingsContainer from "../../containers/Listings/ListingsContainer";
import InfoModalContainer from "../../containers/Modal/InfoModalContainer";

let Preview = () => {
  return (
    <>
      <div>Preview</div>
      <div id="main">
        <GoogleMapContainer />
        <ListingsContainer />
        <InfoModalContainer />
      </div>
    </>
  );
};

export default Preview;
