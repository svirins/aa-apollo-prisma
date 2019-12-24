import React, { Component } from 'react';
import logo from './aa-logo-marker.svg';

import {
  Input,
  Menu,
  Container,
  Dropdown,
  Button,
  Icon
} from 'semantic-ui-react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }
  render() {
    const dropDowns = this.props.regions.map((element, index) => (
      <Dropdown.Item key={index}>{element}</Dropdown.Item>
    ));

    return (
      <Container fluid>
        <Menu color="blue">
          <Menu.Item>
            <img size="mini" src={logo} alt="aalogo" />
          </Menu.Item>

          <Menu.Item>
            <Input
              width={12}
              className="icon"
              type="text"
              icon="search"
              placeholder="search for local AA Meeting"
              value={this.props.inputValue}
              name="inputValue"
              onChange={this.handleFilterTextChange}
            />
          </Menu.Item>

          <Menu.Menu position="right">
            <Dropdown item text="Region">
              <Dropdown.Menu>{dropDowns}</Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

export default Header;
