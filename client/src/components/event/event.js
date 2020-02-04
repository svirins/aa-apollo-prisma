import React from "react";
import {
  Segment,
  Icon,
  Table,
  Header,
  Image,
  Modal,
  Button,
  Grid,
  Divider
} from "semantic-ui-react";
import MapDataDisplay from "../ui-elements/mapDataDisplay";
import TableRow from "../ui-elements/tableRow";
const ReactMarkdown = require("react-markdown");

const Event = props => {
  const start = props.dateStart.substr(0, props.dateStart.indexOf("T"));
  const end = props.dateEnd
    ? ` - ${props.dateEnd.substr(0, props.dateEnd.indexOf("T"))}`
    : "";
  const dateHeader = `${start}${end}`;

  let cityDisplay, contactDisplay,
    addressDisplay,
    agendaDisplay,
    descriptionDisplay,
    urlDisplay = "";

  if (props.city) {
    cityDisplay = <TableRow icon="home" content={props.city} />;
  }
  // construct contact table
  if (props.address) {
    addressDisplay = <TableRow icon="marker" content={props.address} />;
  }
  if (props.programUrl) {
    urlDisplay = <a href={props.programUrl}>Скачать программу</a>;
  }

  if (props.description) {
    descriptionDisplay = props.description;
  }

  if (props.contact) {
    contactDisplay = props.contact.map(el => (
      <TableRow
        key={el.id}
        icon="phone"
        content={<a href={`tel:${el.phone}`}>{el.phone}</a>}
        extraContent={el.name}
        extraExtraContent={el.responsibility}
      />
    ));
  }

  if (props.agenda) {
    agendaDisplay = <ReactMarkdown source={props.agenda} />;
  }

  return (
    <Grid.Column>
      <Segment stacked raised>
        <Image src={props.image.cloudinaryUrl} size="small" floated="right" />
        <Header as="h3">{props.name}</Header>
        {descriptionDisplay}


        <Divider />
        <Header as="h4">{props.city}</Header>

        <Header as="h5">{dateHeader}</Header>
        {descriptionDisplay}
        <Table compact="very" basic="very" unstackable collapsing size="small">
          {cityDisplay}
          {addressDisplay}
          {urlDisplay}
        </Table>
        <Header as="h5">Контакты</Header>
        <Table compact="very" basic="very" unstackable collapsing size="small">
          {contactDisplay}
        </Table>
        {agendaDisplay}

        <Modal
          closeIcon
          trigger={
            <Button color="blue" size="mini">
              <Icon name="map signs" /> {`На карте`}
            </Button>
          }
        >
          <Header as="h4"
            icon="map signs"
            content={`${props.name}, ${props.city}, ${props.address}`}
          />
          <Modal.Content>
            <Modal.Description>
              <MapDataDisplay location={props.location} name={props.name} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
      </Segment>
    </Grid.Column>
  );
};

export default Event;
