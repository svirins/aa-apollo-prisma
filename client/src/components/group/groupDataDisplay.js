import React, { Fragment } from "react";
import { Icon, Label, Button, Modal, Header, Table, Divider } from "semantic-ui-react";
import MapDataDisplay from "../ui-elements/mapDataDisplay";
import { ruRegions, ruMonth } from "../../const/globalConst";
import { format, parseISO } from "date-fns";

const GroupDataDisplay = props => {
  const distanceString = (props.distance / 1000).toFixed(1);
  const birthday = props.birthday
    ? ruMonth.get(format(parseISO(props.birthday), "MMMM")) +
      " " +
      format(parseISO(props.birthday), "yyyy")
    : "";
  const description = props.description ? ` (${props.description})` : "";
  const phone = props.phone ? (
    <a href="tel:{props.phone}">{props.phone}</a>
  ) : (
    ""
  );
  const mail = props.email ? (
    <a href="mailto:{props.email}">{props.email}</a>
  ) : (
    ""
  );
  const website = props.website ? (
    <a href="{props.website}">{props.website}</a>
  ) : (
    ""
  );
  const disabledLabel = props.isActive ? (
    ""
  ) : (
    <Label horizontal color="red" size="small">
      временно не работает
    </Label>
  );

  let birthdayDisplay,
    phoneDisplay,
    mailDisplay,
    websiteDisplay = "";

  if (birthday) {
    birthdayDisplay = (
      <Table.Row>
        <Table.Cell textAlign="left">
          <Icon
            name="birthday"
            color="black"
            size="small"
            style={{ marginRight: "1em" }}
          />
          {birthday}
        </Table.Cell>
      </Table.Row>
    );
  }

  if (phone) {
    phoneDisplay = (
      <Table.Row>
        <Table.Cell textAlign="left">
          <Icon
            name="phone"
            color="black"
            size="small"
            style={{ marginRight: "1em" }}
          />
          {phone}
        </Table.Cell>
      </Table.Row>
    );
  }

  if (mail) {
    mailDisplay = (
      <Table.Row>
        <Table.Cell textAlign="left">
          <Icon
            name="mail"
            color="black"
            size="small"
            style={{ marginRight: "1em" }}
          />
          {mail}
        </Table.Cell>
      </Table.Row>
    );
  }

  if (website) {
    websiteDisplay = (
      <Table.Row>
        <Table.Cell textAlign="left">
          <Icon
            name="globe"
            color="black"
            size="small"
            style={{ marginRight: "1em" }}
          />
          {website}
        </Table.Cell>
      </Table.Row>
    );
  }

  return (
    <Fragment>
      <Header as="h3">
        {props.name}{" "}
        <Label horizontal color="teal" size="small">
          {distanceString} {" км"}
        </Label>      

          
      </Header>
      <Divider/>   
      {disabledLabel}
      <Table compact="very" basic="very" unstackable collapsing size="small">
        <Table.Body>
          <Table.Row>
            <Table.Cell textAlign="left">
              <Icon
                name="home"
                color="black"
                size="small"
                style={{ marginRight: "1em" }}
              />
              {props.city} , {ruRegions.get(props.region)}
            </Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell textAlign="left">
              <Icon
                name="location arrow"
                color="black"
                size="small"
                style={{ marginRight: "1em" }}
              />
              {props.address}
              {description}
            </Table.Cell>
          </Table.Row>
          {phoneDisplay}
          {mailDisplay}
          {websiteDisplay}
          {birthdayDisplay}
        </Table.Body>
      </Table>
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
    </Fragment>
  );
};

export default GroupDataDisplay;
