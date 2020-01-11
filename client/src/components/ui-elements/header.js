import React, {useState} from "react";
import { Image, Menu, Button, Container, Icon } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import logo from "../../assets/images/logo.svg";
import GeoLocateButton from './geolocateButton'

const Header = props => {
  const [activeItem, setActiveItem] = useState('groups')
  // geolocation button disabled for now

  return (

    <Container>
      <Menu icon='labeled' size='mini' stackable>
        <Menu.Item header>
          <Image size="mini" src={logo}  />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/"
          name="groups"
          active={activeItem === 'groups'}
          onClick={((e,{name})=>setActiveItem(name))}
        >
          <Icon name="group" color='grey'/>
          Groups
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/map"
          name="map"
          active={activeItem === 'map'}
          onClick={((e,{name})=>setActiveItem(name))}
        >
          <Icon name="compass" color='grey'/>
          Map
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/events"
          name="events"
          active={activeItem === "events"}
          onClick={((e,{name})=>setActiveItem(name))}
        >
          <Icon name="birthday cake" color='grey'/>
          Events
        </Menu.Item>
        <Menu.Menu position="right">
          {/* <Menu.Item>
            {"geolocation" in navigator ? <GeoLocateButton /> : <Button disabled basic color="red">Geolocaion not supported</Button> }
          </Menu.Item> */}
          <Menu.Item
            as={Link}
            
            to="/login"
            name="login"
            active={activeItem === 'login'}
            onClick={((e,{name})=>setActiveItem(name))}
        >
          <Icon name="user" color='grey'/>
          login
        </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};
export default Header;
