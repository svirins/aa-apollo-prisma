import React from 'react';
import {
  Container,
  Divider,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react'

import logo from '../assets/images/logo.png'


const Footer = () => (
  <Segment inverted vertical style={{ margin: '5em 0em 0em', padding: '5em 0em' }}>
    <Container textAlign='center'>
      <Header inverted as='h4' content='Footer Header' />          
      <Divider inverted section />
      <Image centered size='mini' src={logo} />
      <List horizontal inverted divided link size='small'>
        <List.Item as='a' href='#'>
          Groups 
        </List.Item>
        <List.Item as='a' href='#'>
          Near Me
        </List.Item>
        <List.Item as='a' href='#'>
          Events
        </List.Item>
        <List.Item as='a' href='#'>
          Profile
        </List.Item>
      </List>
    </Container>
  </Segment>
)

export default Footer