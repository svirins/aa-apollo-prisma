import React from "react";
import Meeting from "./meeting";
import { Table, Feed } from "semantic-ui-react";

const MeetingDataDisplay = props => {
  const meetings = props.meetings.map(meeting => (
    <Meeting key={meeting.id} {...meeting} />
  ));
  return (
    <Table compact basic="very" collapsing size="small">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>WeekDay</Table.HeaderCell>
          <Table.HeaderCell>Type</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>{meetings}</Table.Body>
    </Table>
  );
};

export default MeetingDataDisplay;
