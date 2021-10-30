import React from "react";
import axios from "axios";
import ListingsContainer from "../../containers/Listings/ListingsContainer";
import InfoModalContainer from "../../containers/Modal/InfoModalContainer";
import GoogleMapContainer from "../../containers/Map/GoogleMapContainer";
class Listings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div>Listings</div>
        <div id="main">
          <GoogleMapContainer />
          <ListingsContainer />
          <InfoModalContainer />
        </div>
      </>
    );
  }
}

export default Listings;