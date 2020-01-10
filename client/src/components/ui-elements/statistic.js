import React from "react";
import { Container, Statistic, Icon, Image, Header, Divider } from "semantic-ui-react";
import logo from '../../assets/images/logo.svg'
import Error from "./error";
import LoadingMessage from "./loader";
import { usePosition } from 'use-position';
import { useQuery } from "@apollo/react-hooks";
import { GET_STATISTICS } from "../../queries/";
import getDistance from 'geolib/es/getDistance';

// import { calculateDistance } from '../../utils/utils'


const StatisticBar = () => {
  const { data, loading, errorMess } = useQuery(GET_STATISTICS);
  const { latitude, longitude, timestamp, accuracy, error } = usePosition(true, {enableHighAccuracy: true});

  if (loading) return (<LoadingMessage />)
  if (errorMess) return <Error errorMessage="GraphQL server signal an error to the client"/>;

  const { groupCount, citiesCount, meetingCount, eventsCount, groups } = data.getStatistics
  // calculate cstatistics here
  let distanceArray = []
  let todaymeetings= []
  for (var value of groups) {
    console.log(value.location.lattitude,value.location.longitude,latitude, longitude)
    distanceArray.push(getDistance(
      {latitude: value.location.lattitude, longitude: value.location.longitude},
      {latitude, longitude}
      ))
  }
  console.log(distanceArray)
  // lower than 10000 meters!
  const  nearCount  = distanceArray.filter(value => value< 9000).length
  const  nowCount = 0

  return (
    <Container style={{ marginTop: "6em" }}>
       <Header as='h2' textAlign='center'>
         <Image circular size="mini" src={logo} /> Alcoholics Anonimous in Belarus
      </Header>
      <Divider />
      <Statistic.Group widths='six' size="mini">
        <Statistic color='blue'>
          <Statistic.Value><Icon name='users' />{groupCount}</Statistic.Value>
          <Statistic.Label>Groups</Statistic.Label>
        </Statistic>

        <Statistic color='orange'>
          <Statistic.Value><Icon name='map signs' />{citiesCount}</Statistic.Value>
          <Statistic.Label>Cities</Statistic.Label>
        </Statistic>

        <Statistic color='purple'>
          <Statistic.Value><Icon name='coffee' />{meetingCount}</Statistic.Value>
          <Statistic.Label>Meetings</Statistic.Label>
        </Statistic>

        <Statistic color='olive'>
          <Statistic.Value><Icon name='clock' />{nowCount}</Statistic.Value>
          <Statistic.Label>Now</Statistic.Label>
        </Statistic>

        <Statistic color='green'>
          <Statistic.Value><Icon name='map marker alternate' />{nearCount}</Statistic.Value>
          <Statistic.Label>Near</Statistic.Label>
        </Statistic>

        <Statistic color='yellow'>
          <Statistic.Value><Icon name='gift' />{eventsCount}</Statistic.Value>
          <Statistic.Label>Events</Statistic.Label>
        </Statistic>




      </Statistic.Group>




      
    </Container>
  )
}

export default StatisticBar

