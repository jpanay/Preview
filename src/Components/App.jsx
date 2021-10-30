import React, { useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Home from "./Home/Home";
import Listings from "./Listings/Listings";
import Tools from "./Tools/Tools";

const App = ({ getListings }) => {
  useEffect(() => {
    getListings("XYZ Properties");
  }, []);

  let page = 'listings'

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
