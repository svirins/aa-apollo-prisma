import React from 'react';
import { Segment, Icon, Table, Header, Image, Modal, Button, Grid, Divider } from 'semantic-ui-react'
import MapDataDisplay from '../ui-elements/mapDataDisplay'

const Event = props => {
  const dateConverted = props.date.substr(0, props.date.indexOf('T'))
  const cityDisplay = (
    <Table.Row>
      <Table.Cell textAlign="left">
        <Icon
          name="home"
          color="black"
          size="small"
          style={{ marginRight: "1em" }}
        />
        {props.city}
      </Table.Cell>
    </Table.Row>
  );
  
  const contactDisplay = (
    <Table.Row>
      <Table.Cell textAlign="left">
        <Icon
          name="home"
          color="black"
          size="small"
          style={{ marginRight: "1em" }}
        />
        {props.contact}
      </Table.Cell>
    </Table.Row>
  );
  const addressDisplay = (
    <Table.Row>
      <Table.Cell textAlign="left">
        <Icon
          name="home"
          color="black"
          size="small"
          style={{ marginRight: "1em" }}
        />
        {props.address}
      </Table.Cell>
    </Table.Row>
  );
  const agendaDisplay = ''
  return (
    <Grid.Column>
    <Segment stacked raised>
        <Header as='h3'>{props.name}</Header>
        {props.description}
        <Divider />
        <Table compact="very" basic="very" unstackable collapsing size="small">
          {cityDisplay} 
          {contactDisplay}
          {addressDisplay} 
        </Table>
        {agendaDisplay}

        <Image src={props.image.cloudinaryUrl} size='small' />
     
        <Modal
          closeIcon
            trigger={
              <Button
                compact
                icon="map marker alternate"
                color="blue"
                content="На карте"
                size="mini"
                float="right"
              />
            }
          >
          <Header icon="map marker alternate" content={props.name} />
          <Modal.Content>
            <Modal.Description>
              <MapDataDisplay location={props.location} name={props.name} />
              {props.city} / {props.address}
            </Modal.Description>
          </Modal.Content>
        </Modal>
    </Segment>
    </Grid.Column>
    
  )
}

export default Event






      