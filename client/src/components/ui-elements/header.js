import React, { useState } from "react";
import { Image, Menu, Container, Icon, Label } from "semantic-ui-react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { GET_CLIENT_STATISTICS } from '../../queries'
import { useQuery } from "@apollo/react-hooks";

const Header = () => {
  const { data } = useQuery(GET_CLIENT_STATISTICS)
  // console.log(data.nearCount, data.nowCount, data.groupCount, data.eventCount)
  const [activeItem, setActiveItem] = useState("groups");
  let nearCount, nowCount, groupCount, eventCount = 0
  if (data) {
    nearCount = data.nearCount
    nowCount = data.nowCount
    groupCount = data.groupCount
    eventCount = data.eventCount
  }
  return (
    <Container>
      <Menu icon="labeled" size="mini" stackable>
        <Menu.Item header>
          <Image size="mini" src={logo} />
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/"
          name="groups"
          color='blue'
          active={activeItem === "groups"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          <Icon name="group" color="blue" />
          Группы ({groupCount})
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/map"
          name="map"
          color='orange'
          active={activeItem === "map"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          <Icon name="compass" color="blue" />
          Карта
        </Menu.Item>
        <Menu.Item
          as={Link}
          to="/events"
          name="events"
          color='blue'
          active={activeItem === "events"}
          onClick={(e, { name }) => setActiveItem(name)}
        >
          <Icon name="birthday cake" color="blue" />
          События ({eventCount})
        </Menu.Item>
        <Menu.Item>
          <Label color='teal' tag>
           {nearCount}
          </Label> Поблизости
         
        </Menu.Item>
        <Menu.Item>
        <Label color='blue' tag>
           {nowCount}
          </Label> Сегодня
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item
            as={Link}
            to="/login"
            name="login"
            color='blue'
            active={activeItem === "login"}
            onClick={(e, { name }) => setActiveItem(name)}
          >
            <Icon name="user" color="blue" />
            Вход
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </Container>
  );
};
export default Header;
