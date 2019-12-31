import React, { Fragment } from "react";
import Group from "./ groupDataDisplay";
import { Header, Grid, Divider, Image } from "semantic-ui-react";

import GroupDataDisplay from "./ groupDataDisplay";
import MeetingDataDisplay from "./ meetingDataDisplay";
import MapDataDisplay from "./ mapDataDisplay";

const GroupList = props => {
  const groupCount = props.groupData.count;
  const groupGrid = props.groupData.groups.map(group => (
    <Grid.Row key={group.id}>
      <Grid.Column width={6}>
        <Image src="https://react.semantic-ui.com/images/wireframe/image.png" />
        {/* <MapDataDisplay location={group.location} name={group.name}/> */}
      </Grid.Column>
      <Grid.Column width={7}>
        <GroupDataDisplay
          name={group.name}
          description={group.description}
          city={group.city}
          region={group.region}
          address={group.address}
          phone={group.phone}
          email={group.email}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        <MeetingDataDisplay meetings={group.meetings} />
      </Grid.Column>
    </Grid.Row>
  ));
  return (
    <Fragment>
      <Header as="h3" icon>
        <Header.Content>Found {groupCount} groups </Header.Content>
      </Header>
      <Grid columns={3} celled="internally">
        {groupGrid}
      </Grid>
    </Fragment>
  );
};

export default GroupList;
