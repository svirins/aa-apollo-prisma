import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { usePosition } from 'use-position';

const GeoLocateButton = () => {
  const { error } = usePosition(true, {enableHighAccuracy: true});
	return (
		<Button
			basic
			color={!error ? 'green' : 'red'}
			disabled
			floated='right'
		>	
		<Icon name='map marker alternate' />
			{!error ? "Geolocation is on" : "Geolocation disabled"}
		</Button>
	)
}

export default GeoLocateButton

