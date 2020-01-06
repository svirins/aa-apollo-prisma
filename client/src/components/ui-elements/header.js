import React, { useState } from "react";
import { Image, Menu, Input, Button, Container, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'

import logo from "../../assets/images/logo.svg";

const Header = props => {
  const [inputValue, setInputValue] = useState("");
  const handleFilterTextChange = e => {
    setInputValue(e.target.value);
  };
  return (
    <Container>
      <Menu stackable fixed="top">
        <Menu.Item header>
          <Image size="mini" src={logo} style={{ marginRight: "1.5em" }} />
          AA Locator
        </Menu.Item>
        <Menu.Item as={Link} to="/">
          All Groups
        </Menu.Item>
        <Menu.Item as={Link} to="/allgroups">Whole Map</Menu.Item>
        <Menu.Item as={Link} to="/events">Upcoming Events</Menu.Item>
        <Menu.Item as={Link} to="/mapex">Map Experimental</Menu.Item>
        <Menu.Menu position="right">
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
