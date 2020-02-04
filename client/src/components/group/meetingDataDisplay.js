import React, { Fragment } from "react";
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
    <Fragment>
      <Table compact='very' basic='very' unstackable size="small">
        <Table.Body>{meetings}</Table.Body>
      </Table>
    </Fragment>

  );
};

export default MeetingDataDisplay;

