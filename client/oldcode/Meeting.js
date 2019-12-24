import React from 'react';
import ShedTable from './ShedTable';
import MeetingMap from './MeetingMap';
import { List, Image, Grid, Segment, Header } from 'semantic-ui-react';
import logo from './aa-logo-marker.svg';

function Meeting(props) {
  const {
    _id,
    title,
    location,
    region,
    description,
    image,
    schedule,
    telephone,
    email,
    geometry
  } = props;
  const url = `/#${_id}`;
  return (
    <Grid.Column>
      <Segment>
        <a href={url}>
          <Image
            circular
            floated="right"
            size="mini"
            src={logo}
            alt="View on map"
          />
        </a>

        <Header as="h2" dividing color="blue">
          {title}
        </Header>
        <List size="large">
          <List.Item icon="users" content={region} />
          <List.Item icon="map" content={location} />
          <List.Item icon="coffee" content={description} />
          <List.Item
            icon="call"
            content={<a href="tel:{telephone}">{telephone}</a>}
          />
          <List.Item
            icon="mail"
            content={<a href="mailto:{email}">{email}</a>}
          />
        </List>
        <ShedTable schedule={schedule} />
      </Segment>
    </Grid.Column>
  );
}

export default Meeting;
