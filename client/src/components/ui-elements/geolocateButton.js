import React from "react";
import { Button, Popup } from "semantic-ui-react";
import { usePosition } from 'use-position';

export const GeolocateButton = () => {
	let color, content, icon = ''
	const { error } = usePosition(true, {enableHighAccuracy: true});
	if (error) {
		color = 'red'
		content = "Geolocation disabled"
		icon = 'question circle outline'
	} else {
		color = 'olive'
		content = "Geolocation is on"
		icon = 'map'
	}
	return (
		<Popup content={content} trigger={<Button basic disabled icon={icon} color={color} />} />
	)
}




