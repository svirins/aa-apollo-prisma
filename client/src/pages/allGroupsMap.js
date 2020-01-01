import React, { useState, useEffect } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl
} from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";

import { Container } from "semantic-ui-react";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";


import { useQuery } from "@apollo/react-hooks";
import GROUPS_LIST_QUERY_SIMPLIFIED from '../queries/groupsMapList'


const AllGroupsMap = props => {
  const [variables, setVariables] = useState({});
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 53.7211,
    longitude: 27.6903,
    zoom: 6.5,
    width: "100%",
    height: "85vh",
    language: 'ru',
  });

  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedMeeting(null);
      }
    };
    window.addEventListener("keydown", listener);
    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  const {
    data,
    loading,
    error,
    refetch
  } = useQuery(GROUPS_LIST_QUERY_SIMPLIFIED, { variables });

  const mapRef = React.createRef();

  useEffect(() => {
    refetch(variables);
  }, [variables]);

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
            setSelectedMeeting(element);
          }}
        >
          <img
            className="marker-img"
            src="../assets/images/marker.png"
            alt="AA Meeting"
          />
        </button>
      </Marker>
    )
  );

  return (
    <Container fluid>
      <ReactMapGL
        ref={mapRef}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        mapStyle={process.env.REACT_APP_MAPBOX_STYLE}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        {...viewport}
      >
        <GeolocateControl
          positionOptions={{ enableHighAccuracy: true }}
          trackUserLocation={true}
        />
        <NavigationControl />
        {markersList}
        {selectedMeeting ? (
          <Popup
            latitude={selectedMeeting.location.lattitude}
            longitude={selectedMeeting.location.longitude}
            onClose={() => {
              setSelectedMeeting(null);
            }}
          >
            <div>
              <h4>{selectedMeeting.title}</h4>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </Container>
  );
};
export default AllGroupsMap;
