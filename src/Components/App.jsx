import React, { useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Home from "./Home/Home";
import Listings from "./Listings/Listings";
import Tools from "./Tools/Tools";

import ListingsContainer from "../containers/Listings/ListingsContainer";
import InfoModalContainer from "../containers/Modal/InfoModalContainer";
import GoogleMapContainer from "../containers/Map/GoogleMapContainer";

const App = ({ getListings, currentPage, changePage }) => {
  useEffect(() => {
    getListings("XYZ Properties");
  }, []);

  if (currentPage === "home") {
    return (
      <>
        <Navigation changePage={changePage} />
        <Home />
      </>
    );
  }
  if (currentPage === "listings") {
    return (
      <>
        <Navigation changePage={changePage} />
        <Listings />
      </>
    );
  }
  if (currentPage === "tools") {
    return (
      <>
        <Navigation changePage={changePage} />
        <Tools />
      </>
    );
  }

  return (
    <>
      <Navigation changePage={changePage} />
      <div id="main">
        <GoogleMapContainer />
        <ListingsContainer />
        <InfoModalContainer />
      </div>
    </>
  );
};

export default App;
