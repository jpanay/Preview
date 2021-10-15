import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
const API_KEY = process.env.API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

let GoogleMap = (props) => {
  let [lat, setLat] = useState(40.7128);
  let [lng, setLng] = useState(-74.006);
  let [zoom, setZoom] = useState(11);
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: API_KEY }}
        defaultCenter={[lat, lng]}
        defaultZoom={zoom}
        display="satellite"
      >
        <AnyReactComponent lat={lat} lng={lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
