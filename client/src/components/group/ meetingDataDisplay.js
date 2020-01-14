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
    // remove meetings header
    <Table verticalAlign='top' compact='very' stackable size="small" style={{ marginTop: '0em', marginBottom: '0em',  }}>
      <Table.Body>{meetings}</Table.Body>
    </Table>
  );
};

export default MeetingDataDisplay;

