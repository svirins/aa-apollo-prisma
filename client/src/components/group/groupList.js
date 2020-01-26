import React from "react";
import { Grid, Label } from "semantic-ui-react";
import GroupDataDisplay from "./groupDataDisplay";
import MeetingDataDisplay from "./meetingDataDisplay";
import DisabledLabel from '../ui-elements/disabledLabel'
const GroupList = props => {
  const groupGrid = props.groupData.groups
    .sort((a, b) =>
      a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
    )
    .map(group => (

      <Grid.Row key={group.id}>
        <Grid.Column width={12} verticalAlign='middle'>
          <DisabledLabel disabled={group.isActive} />
          <GroupDataDisplay
            name={group.name}
            website={group.website}
            birthday={group.birthday}
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
        <Grid.Column width={4} verticalAlign='middle'>
          <MeetingDataDisplay meetings={group.meetings} />
        </Grid.Column>
      </Grid.Row>
    ));

  return (
    <Grid columns={2} stackable divided='vertically'>
      {groupGrid}
    </Grid>
  );
};

export default GroupList;
