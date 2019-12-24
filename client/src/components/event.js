import React, { useMemo } from 'react';
import { Card, Icon, Divider} from 'semantic-ui-react'

const Event = props => {
  const dateConverted = props.date.substr(0, props.date.indexOf('T'))

  return (
    <Card fluid link>
      <Card.Content>
        <Icon name='home' />{props.city}
        <Card.Content as="h3" header={props.name} />
        <Icon name='clock' />{dateConverted}
        <Divider></Divider>
        <Card.Content description={props.description} />
      </Card.Content>
      <Card.Content extra>
        <Icon name='phone' />{props.contact}
      </Card.Content>
    </Card>
  )
}

export default Event


// {props.agenda}
