import React from 'react';
import {
  Container,
  Divider,
  Image,
  List,
  Segment
} from 'semantic-ui-react'
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";


const Footer = () => (
  <Segment inverted vertical style={{ margin: '0em 0em 0em', padding: '2em 0em' }}>
    <Container textAlign='center'>
      <List horizontal inverted divided link size='small'>
        <List.Item as={Link} to="/">
          Группы 
        </List.Item>
        <List.Item as={Link} to="/map">
          Карта
        </List.Item>
        <List.Item as={Link} to="/events">
          События
        </List.Item>
        <List.Item as={Link} to="/about">
          О проекте
        </List.Item>
      </List>
      <Divider inverted section />

      <Image centered size='mini' src={logo} />
    </Container>
  </Segment>
)

export default Footer