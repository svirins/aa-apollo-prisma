import React from "react";
import Meeting from "./meeting";
import { Table } from "semantic-ui-react";
import sortBy from 'lodash/sortBy'

const weekdays = ["Mo","Tu","We","Th","Fr","Sa","Su"]

const MeetingDataDisplay = props => {
  const sortedMeetings = sortBy(props.meetings, function(item){return weekdays.indexOf(item.weekday)});
  const meetings = sortedMeetings.map(meeting => (
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
