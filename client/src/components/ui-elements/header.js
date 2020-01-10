import React from "react";
import { Image, Menu, Button, Container, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.svg";
import GeoLocateButton from './geolocateButton'

const Header = props => {

  return (
    <Container>
      <Menu stackable fixed="top">
        <Menu.Item header>
          <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
          AA Locator
        </Menu.Item>
        <Menu.Item as={Link} to="/">Groups</Menu.Item>
        <Menu.Item as={Link} to="/allgroups">Map №1</Menu.Item>
        <Menu.Item as={Link} to="/events">Events</Menu.Item>
        <Menu.Item as={Link} to="/mapex">Map №2</Menu.Item>
        
        <Menu.Menu position="right">
          <Menu.Item>
            {"geolocation" in navigator ? <GeoLocateButton /> : <Button disabled basic color="red">Geolocaion not supported</Button> }
          </Menu.Item>
          <Menu.Item>
            <Button primary icon>
              <Icon name="user" />
            </Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};
export default Header;
