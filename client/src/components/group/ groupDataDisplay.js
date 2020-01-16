import React from "react";
import {
  Icon,
  Item,
  Label,
  Button,
  Modal,
  Header,
  Divider
} from "semantic-ui-react";
import MapDataDisplay from "./ mapDataDisplay";

const GroupDataDisplay = props => {
  const distanceString = (props.distance / 1000).toFixed(1);
  return (
    <Item.Content>
      <Item.Header as="h2">
        {props.name}{" "}
        <Label horizontal color="olive" size="tiny">
          {distanceString} {" km"}
        </Label>
      </Item.Header>
      <Item.Meta>
        {props.city} / {props.region}
      </Item.Meta>
      <Divider />
      <Item.Description>{props.description}</Item.Description>
      <Item.Extra>{props.address}</Item.Extra>
      <Item.Extra>
        <Icon name="favorite" /> {props.phone}
        <Icon name="like" /> {props.email}
      </Item.Extra>
      <Modal
        closeIcon
        trigger={
          <Button
            floated="right"
            compact
            basic
            icon="map"
            color="olive"
            content="Map"
          />
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
    </Item.Content>
  );
};

export default GroupDataDisplay;
