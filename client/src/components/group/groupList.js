import React from "react";
import { Grid, Segment } from "semantic-ui-react";
import GroupDataDisplay from "./groupDataDisplay";
import MeetingDataDisplay from "./meetingDataDisplay";
const GroupList = props => {
  const groupGrid = props.groupData.groups
    .sort((a, b) =>
      a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
    )
    .map(group => (
      <Grid.Column mobile={16} tablet={16} computer={8} key={group.id}>
        <Segment stacked raised secondary={!group.isActive} >
          <Grid columns={2} stackable>
            <Grid.Row>
              <Grid.Column width={11} verticalAlign="top">
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
                    isActive={group.isActive}
                  />
                </Grid.Column>
                <Grid.Column width={5}>
                  <MeetingDataDisplay meetings={group.meetings} />
                </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>  
      </Grid.Column>
    ));

  return (
    <Grid columns={2} stackable>
      {groupGrid}
    </Grid>
  );
};

export default GroupList;
