import React, {Fragment} from "react";
import {
  Icon,
  Segment,
  Label,
  Button,
  Modal,
  Header,
  List
} from "semantic-ui-react";
import MapDataDisplay from "../ui-elements/mapDataDisplay";
import { ruRegions } from '../../const/globalConst'
import { format, parseISO } from "date-fns";
import  ru  from 'date-fns/locale/ru'


const GroupDataDisplay = props => {

  const distanceString = (props.distance / 1000).toFixed(1);
  const birthday =  props.birthday ? format(parseISO(props.birthday), "MMMM' 'yyyy", {locale: ru}) : ''
  const description = props.description ? ` (${props.description})` : ''
  const phone = props.phone ? <a href="tel:{props.phone}">{props.phone}</a> : ''
  const mail = props.email ? <a href="mailto:{props.email}">{props.email}</a> : ''
  const website = props.website ? <a href="{props.website}">{props.website}</a> : ''



  return (
    <Fragment>
      <Header as="h3">
        {props.name}{" "}
        <Label horizontal color="pink" size="tiny">
          {distanceString} {" км"}
        </Label>
      </Header>
      <List>
        <List.Item>
          <List.Icon name="home" />
          <List.Content>
            {props.city} , {ruRegions.get(props.region)}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="marker" />
          <List.Content>
            {props.address}{description}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="phone" />
          <List.Content>
            {phone}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="envelope open outline" />
          <List.Content>
            {mail}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="globe" />
          <List.Content>          
            {website}
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Icon name="birthday" />
          <List.Content>
          {birthday}
          </List.Content>
        </List.Item>
      </List>
      <Modal
        closeIcon
        trigger={
          <Button compact basic icon="map" color="pink " content="Карта" />
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
