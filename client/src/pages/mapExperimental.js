import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";

import React, { useState, useEffect, useRef } from "react";
import ReactMapGL, {
  GeolocateControl,
  NavigationControl
} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import { Container } from "semantic-ui-react";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";
import { useQuery } from "@apollo/react-hooks";
import { GROUPS_LIST_QUERY } from "../queries";

const MapExperimental = props => {
  const [viewport, setViewport] = useState({
    latitude: 53.7211,
    longitude: 27.6903,
    zoom: 6.5,
    width: "100%",
    height: "85vh"    
  });

  const mapMapRef = useRef(null);

  const { data, loading, error } = useQuery(GROUPS_LIST_QUERY);

  if (loading) return <LoadingMessage />;
  if (error)
    return (
      <Error errorMessage="GraphQL server signal an error to the client" />
    );


  return (
    <Container fluid>
      <ReactMapGL
        ref={mapMapRef}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        {...viewport}
      >
        <Geocoder mapRef={mapMapRef} mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN} />
        <GeolocateControl/>
        <NavigationControl />
      </ReactMapGL>
    </Container>
  );
};
export default MapExperimental;
