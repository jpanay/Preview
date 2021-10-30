import React, { useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Home from "./Home/Home";
import Listings from "./Listings/Listings";
import Tools from "./Tools/Tools";

import ListingsContainer from "../containers/Listings/ListingsContainer";
import InfoModalContainer from "../containers/Modal/InfoModalContainer";
import GoogleMapContainer from "../containers/Map/GoogleMapContainer";

const App = ({ getListings }) => {
  useEffect(() => {
    getListings("XYZ Properties");
  }, []);

  let page = 'home'

  if (page === 'home') {
    return (
      <>
        <Navigation />
        <Home />
      </>
    )
  }
  if (page === 'listings') {
    return (
      <>
        <Navigation />
        <Listings />
      </>
    )
  }
  if (page === 'tools') {
    return (
      <>
        <Navigation />
        <Tools />
      </>
    )
  }

  return (
    <>
      <Navigation />
      <div id="main">
        <GoogleMapContainer />
        <ListingsContainer />
        <InfoModalContainer />
      </div>
    </>
  );
};

export default App;
