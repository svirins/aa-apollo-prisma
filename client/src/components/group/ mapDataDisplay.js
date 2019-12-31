import React from 'react';

const MapDataDisplay = (props) => {
    const locationString =`${props.location.lattitude}/${props.location.longitude}` 
  return (
    <p>
      {locationString}
    </p>
  
  )
};

export default MapDataDisplay