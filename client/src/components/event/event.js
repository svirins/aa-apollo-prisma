import React from 'react';
import { Segment, Icon, Divider, Header, Image, Modal, Button, List, Grid } from 'semantic-ui-react'
import MapDataDisplay from '../ui-elements/mapDataDisplay'

const Event = props => {
  const dateConverted = props.date.substr(0, props.date.indexOf('T'))
  return (
    <Segment placeholder>
      <Grid columns={2} stackable>
        <Divider vertical />
        <Grid.Column>
          <Header>{props.name}</Header>
          <Icon name='clock' />{dateConverted}
          <List>
            <List.Item>
              <List.Icon name="building" />
              <List.Content>
                {props.city} 
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>
                {props.description}{props.agenda}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>
              {props.contact}
              </List.Content>
            </List.Item>
            <List.Item>
              <List.Icon name="marker" />
              <List.Content>
                {props.address} ({props.description})
              </List.Content>
            </List.Item>
          </List>
        </Grid.Column>
        <Grid.Column verticalAlign='middle'>
          <Image src={props.image.cloudinaryUrl} size='medium' rounded />
        </Grid.Column>
      </Grid>
     
      <Modal
        closeIcon
        trigger={
          <Button compact basic icon="map" color="olive" content="Map" />
        }
      >
        <Header icon="map marker alternate" content={props.name} />
        <Modal.Content>
          <Modal.Description>
            <MapDataDisplay location={props.location} name={props.name} />
            {props.city}
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </Segment>
  )
}

export default Event






      