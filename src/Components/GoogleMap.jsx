import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
const API_KEY = process.env.API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

let GoogleMap = (props) => {
  let [lat, setLat] = useState(40.78);
  let [lng, setLng] = useState(-73.95);
  let [zoom, setZoom] = useState(12);
  return (
    <div style={{ height: "100vh", width: "100%" }} id="map-wrapper">
      <GoogleMapReact
        id="map"
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={[lat, lng]}
        defaultZoom={zoom}
      >
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
