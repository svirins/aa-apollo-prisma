import React from "react";
import { Container, Statistic, Icon, Image, Header, Divider } from "semantic-ui-react";
import logo from '../../assets/images/logo.svg'

import Error from "./error";
import LoadingMessage from "./loader";

import { useQuery } from "@apollo/react-hooks";
import { GET_STATISTICS } from "../../queries/";




const StatisticBar = () => {
  const { data, loading, error } = useQuery(GET_STATISTICS);
  if (loading) return (<LoadingMessage />)
  if (error) return <Error errorMessage="GraphQL server signal an error to the client"/>;

  const {groupCount, citiesCount, meetingCount} = data
  const nowCount = getNow(data)
  return (
    <Container style={{ marginTop: "6em" }}>
       <Header as='h2' textAlign='center'>
         <Image circular src={logo} /> Alcoholics Anonimous in Belarus
      </Header>
      <Divider />
      <Statistic.Group widths='four'>
        <Statistic color='red'>
          <Statistic.Value>{groupCount}</Statistic.Value>
          <Statistic.Label>Groups</Statistic.Label>
        </Statistic>

        <Statistic color='violet'>
          <Statistic.Value>{citiesCount}</Statistic.Value>
          <Statistic.Label>Cities</Statistic.Label>
        </Statistic>

        <Statistic color='orange'>
          <Statistic.Value>
            <Icon name='plane' />{meetingCount}}
          </Statistic.Value>
          <Statistic.Label>Meetings</Statistic.Label>
        </Statistic>

        <Statistic color='green'>
          <Statistic.Value>{nowCount}</Statistic.Value>
          <Statistic.Label>Now</Statistic.Label>
        </Statistic>
      </Statistic.Group>
    </Container>
  )
}

export default StatisticBar

