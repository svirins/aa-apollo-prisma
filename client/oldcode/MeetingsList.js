import React from 'react';
import Meetings from './Meetings';
import { groupBy } from 'lodash';

const MeetingsList = props => {
  const grouped = groupBy(props.meetings, el => el.region);
  const regionKeys = Object.keys(grouped);
  const rezult = regionKeys.map((element, index) => (
    <Meetings meetingsList={grouped[element]} region={element} key={element} />
  ));
  return rezult;
};

export default MeetingsList;
