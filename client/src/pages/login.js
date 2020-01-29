import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import logo from '../assets/images/logo.svg'

const LoginPage = () => (
  <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h3' color='blue' textAlign='center'>
        <Image src={logo} /> Вход в учетную запись
      </Header>
      <Form size='small'>
        <Segment stacked>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Имя пользователя' />
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Пароль'
            type='password'
          />

          <Button color='blue' fluid size='large'>
            Вход
          </Button>
        </Segment>
      </Form>
      <Message>
        Новый пользователь? <a href='/'>Регистрация</a>
      </Message>
    </Grid.Column>
  </Grid>
)

export default LoginPage