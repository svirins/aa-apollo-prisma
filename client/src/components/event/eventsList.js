import React,{ Fragment } from 'react';
import { Card, Header, Image} from 'semantic-ui-react'
import Event from './event'
import logo from '../../assets/images/aa-logo-marker.svg'

const EventList = props => {
  const eventCount = props.eventList.count
  const events = props.eventList.events.map(event => (
    <Event key={event.id} {...event} />
  ));
  return (
    <Fragment>
      <Header as='h3' icon textAlign='center'>
        <Image
        size='large'
        src={logo}
        />
        <Header.Content>{eventCount} upcoming events</Header.Content>
      </Header>
      <Card.Group>
        {events}
      </Card.Group>
    </Fragment>
  )
}

export default EventList