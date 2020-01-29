import React from 'react'
import { Message, Icon, Container } from 'semantic-ui-react'

const LoadingMessage = () => (
  <Container>
    <Message icon>
      <Icon name='circle notched' loading />
      <Message.Content>
        <Message.Header>Ждите (недолго)</Message.Header>
        Запрашиваем и обрабатываем информацию для Вас...
      </Message.Content>
  </Message>
  </Container>
)

export default LoadingMessage