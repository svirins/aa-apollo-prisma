import React from 'react';
import { getToday } from "../../utils/utils";

import {
  Table,
  Header,
  Image
} from "semantic-ui-react";


const Meeting = (props) => {
  const weekday = getToday();
  let isToday = (props.weekday === weekday) ? true : false
  const timeSubstr = props.time.substr(props.time.indexOf('T')+1, 5)
  return (
    <Table.Row positive={isToday}>
      <Table.Cell>
        <Header as='h4' image>
          <Image src='https://react.semantic-ui.com/images/avatar/small/lena.png' rounded size='mini' />
          <Header.Content>
            {props.weekday}
            <Header.Subheader>{timeSubstr}</Header.Subheader>
          </Header.Content>
        </Header>
      </Table.Cell>
      <Table.Cell>{props.type}</Table.Cell>
    </Table.Row>  
  )
}

export default Meeting