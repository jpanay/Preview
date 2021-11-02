import React, { useEffect } from "react";
import Navigation from "./Nav/Navigation";
import Home from "./Home/Home";
import Preview from "./Listings/Preview";
import Tools from "./Tools/Tools";
import ListingsContainer from "../containers/Listings/ListingsContainer";
import InfoModalContainer from "../containers/Modal/InfoModalContainer";
import GoogleMapContainer from "../containers/Map/GoogleMapContainer";
import NavigationContainer from "../containers/Nav/NavigationContainer";

const App = ({ getListings, currentPage }) => {
  useEffect(() => {
    getListings();
  }, []);

  if (currentPage === "home") {
    return (
      <>
        <NavigationContainer />
        <Home />
      </>
    );
  }
  if (currentPage === "listings") {
    return (
      <>
        <NavigationContainer />
        <Preview />
      </>
    );
  }
  if (currentPage === "tools") {
    return (
      <>
        <NavigationContainer />
        <Tools />
      </>
    );
  }
};

export default App;
