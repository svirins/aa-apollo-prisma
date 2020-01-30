import React from 'react';
import { Segment, Icon, Table, Header, Image, Modal, Button, Grid, Divider } from 'semantic-ui-react'
import MapDataDisplay from '../ui-elements/mapDataDisplay'
import  TableRow  from '../ui-elements/tableRow'

const Event = props => {
  const start = props.dateStart.substr(0, props.dateStart.indexOf('T'))
  const end = props.dateEnd ? ` - ${props.dateEnd.substr(0, props.dateEnd.indexOf('T'))}` : ''
  const dateCityHeader = `${start}${end} , ${props.city}`
 
  const cityDisplay = ( <TableRow icon="home" content={props.city} />);
  const contactDisplay = ( <TableRow icon="phone" content={props.contact} />);
  const addressDisplay = ( <TableRow icon="marker" content={props.address} />);

  const agendaDisplay = ''
  return (
    <Grid.Column>
    <Segment stacked raised>
        <Header as='h3'>{props.name}</Header>
        <Header as='h5'>{dateCityHeader}</Header>

        {props.description}
        <Divider />
        <Image src={props.image.cloudinaryUrl} size='small' floated='right'/>

        <Table compact="very" basic="very" unstackable collapsing size="small">
          {cityDisplay} 
          {contactDisplay}
          {addressDisplay} 
        </Table>
        {agendaDisplay}

     
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






      