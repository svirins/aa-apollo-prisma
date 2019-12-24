import React, { useState, useEffect } from 'react';
import ReactMapGl, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl
} from 'react-map-gl';
import logoMarker from './aa-logo-marker.svg';
import { Container, List } from 'semantic-ui-react';
import Geocoder from 'react-map-gl-geocoder';

const MapDisplay = props => {
  const [viewport, setViewport] = useState({
    latitude: 53.7211,
    longitude: 27.6903,
    zoom: 6.5,
    width: '100%',
    height: '85vh'
  });

  const mapRef = React.createRef();

  const [selectedMeeting, setSelectedMeeting] = useState(null);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedMeeting(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <Container fluid>
      <ReactMapGl
        ref={mapRef}
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <NavigationControl />

        {props.meetings.map(element => (
          <Marker
            key={element._id}
            latitude={element.geometry.coordinates[0]}
            longitude={element.geometry.coordinates[1]}
          >
            <button
              className="marker-btn"
              onClick={e => {
                e.preventDefault();
                setSelectedMeeting(element);
              }}
            >
              <img className="marker-img" src={logoMarker} alt="AA Meeting" />
            </button>
          </Marker>
        ))}
        {selectedMeeting ? (
          <Popup
            latitude={selectedMeeting.geometry.coordinates[0]}
            longitude={selectedMeeting.geometry.coordinates[1]}
            onClose={() => {
              setSelectedMeeting(null);
            }}
          >
            <div>
              <h4>{selectedMeeting.title}</h4>
              <hr />
              <p>{selectedMeeting.location}</p>
              <p>{selectedMeeting.description}</p>
              <p>{selectedMeeting.telephone}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGl>
    </Container>
  );
};

export default MapDisplay;
