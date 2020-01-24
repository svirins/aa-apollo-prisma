import React from 'react';
import { Container } from 'semantic-ui-react'
import Event from './event'

const EventList = props => {
  const events = props.eventList.events.map(event => (
    <Event key={event.id} {...event} />
  ));
  return (
    <Container>
      {events}
    </Container>
  )
}

export default EventList