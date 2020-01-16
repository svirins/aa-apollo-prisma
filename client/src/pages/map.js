import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl
} from "react-map-gl";
import mapMarker from "../assets/images/logoMarker.svg";

import Geocoder from "react-map-gl-geocoder";
import { Container } from "semantic-ui-react";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";
import { useQuery } from "@apollo/react-hooks";
import { GROUPS_LIST_QUERY } from "../queries";

const Map = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 53.7211,
    longitude: 27.6903,
    zoom: 6.5,
    width: "100%",
    height: "85vh"    
  });

  const mapMapRef = useRef(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedMarker(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const { data, loading, error } = useQuery(GROUPS_LIST_QUERY);

  if (loading) return <LoadingMessage />;
  if (error)
    return (
      <Error errorMessage="GraphQL server signal an error to the client" />
    );

  const markersList = data.groupList.groups.map(element => (
    <Marker
      key={element.id}
      latitude={element.location.lattitude}
      longitude={element.location.longitude}
    >
      <button
        className="marker-btn"
        onClick={e => {
          e.preventDefault();
          setSelectedMarker(element);
        }}
      >
        <img className="marker-img" src={mapMarker} alt="AA Meeting" />
      </button>
    </Marker>
  ));

  return (
    <Container fluid>
      <ReactMapGL        
        {...viewport}
        ref={mapMapRef}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <Geocoder mapRef={mapMapRef} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} />

        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <NavigationControl />
        {markersList}
        {selectedMarker ? (
          <Popup
            latitude={selectedMarker.location.lattitude}
            longitude={selectedMarker.location.longitude}
            onClose={() => {
              setSelectedMarker(null);
            }}
          >
            <div>
              <h4>{selectedMarker.name}</h4>
              <p>{selectedMarker.address}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </Container>
  );
};
export default Map;
