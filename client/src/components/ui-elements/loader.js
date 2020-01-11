import React from 'react'
import { Message, Icon, Container } from 'semantic-ui-react'

const LoadingMessage = () => (
  <Container>
    <Message icon>
      <Icon name='circle notched' loading />
      <Message.Content>
        <Message.Header>Just one second</Message.Header>
        We are fetching that content for you.
      </Message.Content>
  </Message>
  </Container>
)

export default LoadingMessage