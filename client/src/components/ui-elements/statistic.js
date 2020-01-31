import React from "react";
import { Container, Statistic, Icon, Divider, Segment, Grid } from "semantic-ui-react";
import Error from "./error";
import LoadingMessage from "./loader";

import { useQuery } from "@apollo/react-hooks";
import { GET_STATISTICS, GET_POSITION } from "../../queries/";

import getDistance from "geolib/es/getDistance";
import { getToday } from "../../utils/utils";

const StatisticBar = () => {
  const { data, loading, error, client } = useQuery(GET_STATISTICS);
  const { data: geoData } = useQuery(GET_POSITION);

  if (loading && !data) return <LoadingMessage />;
  if (error)
    return (
      <Error errorMessage="GraphQL server signal an error to the client" />
    );

  const {
    groupCount,
    citiesCount,
    meetingCount,
    eventsCount,
    groups,
    meetings
  } = data.getStatistics;
  // calculate distance  lower than 10000 meters!
  let distanceArray = [];
  if (geoData) {
    const { latitude, longitude } = geoData;
    for (let value of groups) {
      distanceArray.push(
        getDistance(
          {
            latitude: value.location.lattitude,
            longitude: value.location.longitude
          },
          { latitude, longitude }
        )
      );
    }
  }

  const nearCount = distanceArray.filter(value => value < 9000).length;
  // calculate total amount of today's meetings style={{ marginTop: "1.5em" }
  const nowCount = meetings.filter(el => el.weekday === getToday()).length;

  client.writeData({
    data: {
      nearCount: nearCount,
      nowCount: nowCount,
      groupCount: groupCount,
      eventCount: eventsCount
    }
  });

  return (
    <Container>
      <Divider />
      <Segment basic>
      <Grid columns={2} stackable>
        <Grid.Column>
          <Statistic.Group widths="three" size="mini">
            <Statistic color="blue" >
              <Statistic.Value>
                <Icon name="users" />
                {groupCount}
              </Statistic.Value>
              <Statistic.Label size="mini">Групп АА</Statistic.Label>
            </Statistic>
            <Statistic color="orange">
              <Statistic.Value>
                <Icon name="map signs" />
                {citiesCount}
              </Statistic.Value>
              <Statistic.Label>Городов</Statistic.Label>
            </Statistic>
            <Statistic color="purple">
              <Statistic.Value>
                <Icon name="coffee" />
                {meetingCount}
              </Statistic.Value>
              <Statistic.Label>Собраний</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Grid.Column>
        <Grid.Column>
          <Statistic.Group widths="three" size="mini">
            <Statistic color="olive">
              <Statistic.Value>
                <Icon name="clock" />
                {nowCount}
              </Statistic.Value>
              <Statistic.Label>Сегодня</Statistic.Label>
            </Statistic>

            <Statistic color="green">
              <Statistic.Value>
                <Icon name="map marker alternate" />
                {nearCount}
              </Statistic.Value>
              <Statistic.Label>Рядом</Statistic.Label>
            </Statistic>

            <Statistic color="yellow">
              <Statistic.Value>
                <Icon name="gift" />
                {eventsCount}
              </Statistic.Value>
              <Statistic.Label>Событий</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        </Grid.Column>  
      </Grid>
      </Segment>
    </Container>
  );
};

export default StatisticBar;
