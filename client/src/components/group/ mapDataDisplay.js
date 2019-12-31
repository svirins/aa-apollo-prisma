import React, { useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl'
import { Container } from 'semantic-ui-react';

import mapMarker from "../../assets/images/marker.png";

const MapDataDisplay = (props) => {
  const [viewport, setViewport] = useState({
    latitude: props.location.lattitude,
    longitude: props.location.longitude,
    zoom: 8.5,
    width: '100%',
    height: '30vh', 
    language: 'ru'
  });

  const _goToMinsk = () => {
    const viewport = {
      ...viewport,
      longitude: 27.73603,
      latitude: 53.883812,
      zoom: 10.68
    };
    setViewport(viewport);
  };

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