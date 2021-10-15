import React from "react";
import Navigation from "./Navigation";
import GoogleMap from "./GoogleMap";
import Listings from "./Listings";
class App extends React.Component {
  render() {
    return (
      <>
        <Navigation />
        <div id="main">
          <Listings />
          <GoogleMap />
        </div>
      </>
    );
  }
}

export default App;
