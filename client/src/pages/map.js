import React, { useState, useEffect, useMemo } from "react";

import ReactMapGL, {
  Marker,
  Popup,
  GeolocateControl,
  NavigationControl
} from "react-map-gl";

import { Container } from "semantic-ui-react";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";
import { useQuery } from "@apollo/react-hooks";
import { GROUPS_LIST_QUERY } from "../queries";
import mapMarker from "../assets/images/logoMarker.svg";
import { ruRegions } from "../const/globalConst";

const Map = () => {
  let zoomLevel = 5.15;

  const [selectedMarker, setSelectedMarker] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 53.7211,
    longitude: 27.6903,
    zoom: zoomLevel,
    width: "100%",
    height: "85vh"
  });

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

  const memoizedError = useMemo(() => <Error />, []);
  const memoizedLoading = useMemo(() => <LoadingMessage />, []);
  if (loading) return memoizedLoading;
  if (error) return memoizedError;

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
        <NavigationControl showCompass={false} />
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
              <h5>{selectedMarker.name}</h5>
              <p>
                {selectedMarker.city}, {ruRegions.get(selectedMarker.region)}
              </p>
              <p>{selectedMarker.address}</p>
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </Container>
  );
};
export default Map;
