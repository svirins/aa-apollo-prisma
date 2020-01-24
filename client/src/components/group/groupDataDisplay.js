import React from "react";
import {
  Icon,
  Segment,
  Label,
  Button,
  Modal,
  Header,
  Divider,
  List
} from "semantic-ui-react";
import MapDataDisplay from "../ui-elements/mapDataDisplay";

const GroupDataDisplay = props => {
  const distanceString = (props.distance / 1000).toFixed(1);
  return (
    <Segment placeholder>
      <Header as="h2">
        {props.name}{" "}
        <Label horizontal color="purple" size="tiny">
          {distanceString} {" km"}
        </Label>
      </Header>
      <Modal
        closeIcon
        trigger={
          <Button compact basic icon="map" color="purple" content="Map" />
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
      <Divider />

      <List>
        <List.Item>
          <List.Icon name="home" />
          <List.Content>
            {props.city} / {props.region}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>
            {props.address} ({props.description})
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="phone" />
          <List.Content>{props.phone}</List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="mail" />
          <List.Content>
            <a href="mailto:{props.email}">{props.email}</a>
          </List.Content>
        </List.Item>
      </List>
    </Segment>
  );
};

export default GroupDataDisplay;
