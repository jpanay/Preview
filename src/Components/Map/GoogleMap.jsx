import GoogleMapReact from "google-map-react";
import React, { useState } from "react";
import Marker from "./Marker";
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

let GoogleMap = ({ listings }) => {
  let [lat, setLat] = useState(40.768);
  let [lng, setLng] = useState(-73.96);
  let [zoom, setZoom] = useState(12);
  let createMapOptions = {
    // mapTypeId: "hybrid",
    // tilt: 25,
    // mapId: "98fd435c484984e9",
  };

  return (
    <div id="map-wrapper">
      <GoogleMapReact
        id="map"
        bootstrapURLKeys={{ key: GOOGLE_API_KEY }}
        defaultCenter={[lat, lng]}
        defaultZoom={zoom}
        options={createMapOptions}
      >
        {listings ? (
          listings.map(function (listing, i) {
            return (
              <Marker
                obj={listing}
                key={i}
                listing={listing}
                lat={listing.position.lat}
                lng={listing.position.lng}
              />
            );
          })
        ) : (
          <></>
        )}
        {/* <AnyReactComponent lat={lat} lng={lng} text="My Marker" /> */}
      </GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
