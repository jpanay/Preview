import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import Marker from "./Marker"
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

const AnyReactComponent = ({ text }) => <div>{text}</div>;

let GoogleMap = (props) => {
  let [lat, setLat] = useState(40.78);
  let [lng, setLng] = useState(-73.95);
  let [zoom, setZoom] = useState(12);
  return (
    <div style={{ height: "100vh", width: "100%" }} id="map-wrapper">
      <GoogleMapReact
        id="map"
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={[lat, lng]}
        defaultZoom={zoom}
      >
        {props.listings.map(function(listing, i){
          return <Marker obj={listing} key={i} listing={listing} lat={listing.position.lat} lng={listing.position.lng} />;
        })}
        {/* <AnyReactComponent lat={lat} lng={lng} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
