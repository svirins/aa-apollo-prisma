import React from "react";
import { Grid } from "semantic-ui-react";
import GroupDataDisplay from "./groupDataDisplay";
import MeetingDataDisplay from "./meetingDataDisplay";

const GroupList = props => {
  const groupGrid = props.groupData.groups
    .sort((a, b) =>
      a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
    )
    .map(group => (
      <Grid.Row key={group.id}>
        <Grid.Column width={13}>
          <GroupDataDisplay
            name={group.name}
            description={group.description}
            city={group.city}
            region={group.region}
            address={group.address}
            phone={group.phone}
            email={group.email}
            distance={group.distance}
            location={group.location}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <MeetingDataDisplay meetings={group.meetings} />
        </Grid.Column>
      </Grid.Row>
    ));

  return (
    <Grid columns={2} divided="vertically" stackable>
      {groupGrid}
    </Grid>
  );
};

export default GroupList;
