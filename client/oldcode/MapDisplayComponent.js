import React, { Component } from 'react';
import MapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl
} from 'react-map-gl';
import logoMarker from './aa-logo-marker.svg';
import { Container } from 'semantic-ui-react';
import Geocoder from 'react-map-gl-geocoder';

class MapDisplayComponent extends Component {
  state = {
    viewport: {
      latitude: 53.7211,
      longitude: 27.6903,
      zoom: 6.5,
      width: '100%',
      language: 'ru',
      height: '85vh'
    },
    selectedMeeting: null
  };

  mapRef = React.createRef();

  _goToMinsk = () => {
    const viewport = {
      ...this.state.viewport,
      longitude: 27.73603,
      latitude: 53.883812,
      zoom: 10.68
    };
    this.setState({ viewport });
  };

  setSelectedMeeting = selectedMeeting => {
    this.setState({
      selectedMeeting
    });
  };

  handleViewportChange = viewport => {
    this.setState({
      viewport: { ...this.state.viewport, ...viewport }
    });
  };

  componentDidMount() {
    const listener = e => {
      if (e.key === 'Escape') {
        this.setSelectedMeeting(null);
      }
    };
    window.addEventListener('keydown', listener);
    return () => {
      window.removeEventListener('keydown', listener);
    };
  }

  handleGeocoderViewportChange = viewport => {
    const geocoderDefaultOverrides = { transitionDuration: 1000 };

    return this.handleViewportChange({
      ...viewport,
      ...geocoderDefaultOverrides
    });
  };

  render() {
    return (
      <Container fluid>
        <MapGL
          ref={this.mapRef}
          {...this.state.viewport}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
          mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
          onViewportChange={this.handleViewportChange}
        >
          <Geocoder
            mapRef={this.mapRef}
            onViewportChange={this.handleGeocoderViewportChange}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
            position="top-right"
            countries="by"
            language="ru, en"
            placeholder="Найти группу АА ..."
          />
          <GeolocateControl
            positionOptions={{ enableHighAccuracy: true }}
            trackUserLocation={true}
          />
          <NavigationControl />

          {this.props.meetings.map(element => (
            <Marker
              key={element._id}
              latitude={element.geometry.coordinates[0]}
              longitude={element.geometry.coordinates[1]}
            >
              <button
                className="marker-btn"
                onClick={e => {
                  e.preventDefault();
                  this.setSelectedMeeting(element);
                }}
              >
                <img className="marker-img" src={logoMarker} alt="AA Meeting" />
              </button>
            </Marker>
          ))}
          {this.state.selectedMeeting ? (
            <Popup
              latitude={this.state.selectedMeeting.geometry.coordinates[0]}
              longitude={this.state.selectedMeeting.geometry.coordinates[1]}
              onClose={() => {
                this.setSelectedMeeting(null);
              }}
            >
              <div>
                <h4>{this.state.selectedMeeting.title}</h4>
                <hr />
                <a href={this.state.selectedMeeting._id}>link</a>
                <p>{this.state.selectedMeeting.location}</p>
                <p>{this.state.selectedMeeting.description}</p>
                <p>{this.state.selectedMeeting.telephone}</p>
              </div>
            </Popup>
          ) : null}
        </MapGL>
      </Container>
    );
  }
}
export default MapDisplayComponent;
