import React from "react";
import { Grid, Button, Icon, Modal } from "semantic-ui-react";

import GroupDataDisplay from "./ groupDataDisplay";
import MeetingDataDisplay from "./ meetingDataDisplay";
import MapDataDisplay from "./ mapDataDisplay";

const GroupList = props => {
  const groupGrid = props.groupData.groups.map(group => (
    <Grid.Row key={group.id}>
      <Grid.Column width={6}>
        <Modal trigger={<Button icon='map' color='green'>Map</Button>}>
         <Modal.Header>Address goes here</Modal.Header>
         <Modal.Content>
          <Modal.Description>
            <MapDataDisplay location={group.location} name={group.name}/>
            <p>Descr</p>
          </Modal.Description>
        </Modal.Content>
      </Modal>
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
      <Grid columns={3} celled="internally" stackable>
        {groupGrid}
      </Grid>
  );
};

export default GroupList;
