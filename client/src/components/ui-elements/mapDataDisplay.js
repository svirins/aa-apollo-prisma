import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Container } from 'semantic-ui-react';

import mapMarker from "../../assets/images/logoMarker.svg";

const MapDataDisplay = (props) => {
  const [viewport, setViewport] = useState({
    latitude: props.location.lattitude,
    longitude: props.location.longitude,
    zoom: 13.5,
    width: '100%',
    height: '30vh', 
    language: 'ru'
  });

  return (
    <Container>
      <ReactMapGL
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        {...viewport} >
      <Marker
        latitude={props.location.lattitude}
        longitude={props.location.longitude}
      >
        <img className="marker-img" src={mapMarker} alt="AA Meeting" />
      </Marker>   
      </ReactMapGL>
    </Container>
    
  )
};

export default MapDataDisplay