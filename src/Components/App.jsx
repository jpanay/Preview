import React, { useEffect } from "react";
import Navigation from "./Navigation";
import ListingsContainer from "../containers/ListingsContainer";
import InfoModalContainer from "../containers/InfoModalContainer";
import GoogleMapContainer from "../containers/GoogleMapContainer";

const App = ({ getListings }) => {
  useEffect(() => {
    getListings("XYZ Properties");
  }, []);

  return (
    <>
      {/* <Navigation /> */}
      <div id="main">
        <GoogleMapContainer />
        <ListingsContainer />
        <InfoModalContainer />
      </div>
    </>
  );
};

export default App;
