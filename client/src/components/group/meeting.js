import React from 'react';
import { format, parseISO } from "date-fns";
import { getToday } from '../../utils/utils';

import {
  Table,
  Header,
  Image
} from "semantic-ui-react";


const Meeting = (props) => {
  const isToday = (props.weekday === getToday()) ? true : false
  const timeSubstr = format(parseISO(props.time), 'p')
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