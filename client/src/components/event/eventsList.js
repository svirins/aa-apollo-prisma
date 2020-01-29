import React from 'react';
import { Grid } from 'semantic-ui-react'
import Event from './event'

const EventList = props => {
  const events = props.eventList.events.map(event => (
    <Event key={event.id} {...event} />
  ));
  return (
    <Grid columns={2} stackable>
      {events}
    </Grid>
  )
}

export default EventList