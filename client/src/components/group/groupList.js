import React from "react";
import { Grid, Button, Modal, Header } from "semantic-ui-react";

import GroupDataDisplay from "./ groupDataDisplay";
import MeetingDataDisplay from "./ meetingDataDisplay";
import MapDataDisplay from "./ mapDataDisplay";

const GroupList = props => {
  const groupGrid = props.groupData.groups.map(group => (
    <Grid.Row key={group.id}>
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
      <Grid.Column width={6}>
      <p>Distance is: {}</p>
        <Modal  closeIcon trigger={<Button compact basic icon='map' color='blue' content="Map"/>}>
          <Header icon='map marker alternate' content={group.name} />
         <Modal.Content>
          <Modal.Description>
            <MapDataDisplay location={group.location} name={group.name}/>
            {group.city}
          </Modal.Description>
        </Modal.Content>
      </Modal>
      </Grid.Column>
      <Grid.Column width={3}>
        <MeetingDataDisplay meetings={group.meetings} />
      </Grid.Column>
    </Grid.Row>
  ));
  return (
      <Grid columns={3} divided='vertically' stackable>
        {groupGrid}
      </Grid>
  );
};

export default GroupList;
