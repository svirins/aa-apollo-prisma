import React from 'react';
import {
  Icon,
  Item,
} from 'semantic-ui-react'

const GroupDataDisplay = (props) => {
  return (
    <Item.Content>
      <Item.Header as='h3'>{props.name}</Item.Header>
      <Item.Meta>{props.city} / {props.region}</Item.Meta>
      <Item.Description>{props.description}</Item.Description>
      <Item.Extra>{props.address}</Item.Extra>
      <Item.Extra>
        <Icon name='favorite' /> {props.phone}
        <Icon name='like' /> {props.email}
      </Item.Extra>
    </Item.Content>
  )  
};

export default GroupDataDisplay