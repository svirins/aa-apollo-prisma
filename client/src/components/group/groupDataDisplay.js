import React, { Fragment } from "react";
import { Icon, Label, Button, Modal, Header, Table, Divider } from "semantic-ui-react";
import MapDataDisplay from "../ui-elements/mapDataDisplay";
import { ruRegions, ruMonth } from "../../const/globalConst";
import { format, parseISO } from "date-fns";
import  TableRow  from '../ui-elements/tableRow'

const GroupDataDisplay = props => {
  const distanceString = (props.distance / 1000).toFixed(1);
  const birthday = props.birthday
    ? ruMonth.get(format(parseISO(props.birthday), "MMMM")) +
      " " +
      format(parseISO(props.birthday), "yyyy")
    : "";
  const description = props.description ? ` (${props.description})` : "";
  let phone = ''
  if (props.phone && props.phone.indexOf('/') === -1) {
    phone = (<a href={`tel:${props.phone}`}>{props.phone}</a>)
  } else if (props.phone.indexOf('/') !== -1) {
      let part1 = props.phone.substr(0, props.phone.indexOf('/'))
      let part2 = props.phone.substr(props.phone.indexOf('/') +2, props.phone.length )
    phone = (<Fragment><a href={`tel:${part1}`}>{part1}</a>/<a href={`tel:${part2}`}> {part2}</a></Fragment>
     ) 
  }

  const mail = props.email ? (
    <a href={`mailto:${props.email}`}>{props.email}</a>
  ) : (
    ""
  );
  const website = props.website ? (
    <a href={props.website}>{props.website}</a>
  ) : (
    ""
  );
  const disabledLabel = props.isActive ? (
    ""
  ) : (
    <Label horizontal color="pink" basic size="small">
      временно не работает
    </Label>
  );

  let birthdayDisplay,
    phoneDisplay,
    mailDisplay,
    websiteDisplay = "";

  if (birthday) birthdayDisplay =  ( <TableRow icon="birthday" content={birthday} />);
  if (phone) phoneDisplay = ( <TableRow icon="phone" content={phone} />);
  if (mail) mailDisplay = ( <TableRow icon="mail" content={mail} />);
  if (website) websiteDisplay = ( <TableRow icon="globe" content={website} />);
     

  return (
    <Fragment>
      <Header as="h3">
        {props.name}{" "}
        <Label horizontal as='a' color="blue" size="small" basic>
          {distanceString} {" км"}
        </Label>      

          
      </Header>
      <Divider/>   
      {disabledLabel}
      <Table compact="very" basic="very" unstackable collapsing size="small">
        <Table.Body>
          <TableRow icon="home" content={`${props.city} , ${ruRegions.get(props.region)}`} />
          <TableRow icon="location arrow" content={`${props.address}${description}`} />
          {phoneDisplay}
          {mailDisplay}
          {websiteDisplay}
          {birthdayDisplay}
        </Table.Body>
      </Table>
      <Modal
            closeIcon
            trigger={
              <Button color='blue' size="mini">
                <Icon name='map signs' /> {`На карте`}
              </Button>
            }
          >
          <Header as="h4" icon="map signs" content={`${props.name}, ${props.city}, ${props.address}`} />
          <Modal.Content>
            <Modal.Description>
              <MapDataDisplay location={props.location} name={props.name} />
            </Modal.Description>
          </Modal.Content>
        </Modal>
    </Fragment>
  );
};

export default GroupDataDisplay;
