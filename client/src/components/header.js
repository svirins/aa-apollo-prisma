import React from 'react'
import {
  Image,
  Menu,
  Input,
  Button
} from 'semantic-ui-react'

const Header = () => (
  <Menu stackable fixed='top'>
    <Menu.Item as='a' header>
      <Image size='mini' src='../assets/images/logo.png' style={{ marginRight: '1.5em' }} />
      AA Locator
    </Menu.Item>
    <Menu.Item to="/">
      All Groups
    </Menu.Item>
    <Menu.Item to="/nearme">
      Near Me
    </Menu.Item>
    <Menu.Item to="/events">
      Upcoming Events
    </Menu.Item>
    <Menu.Menu position='right'>
      <Menu.Item>
        <Input icon='search' placeholder='Search...' />
      </Menu.Item>
      <Menu.Item>
        <Button primary>Sign up</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
)

export default Header