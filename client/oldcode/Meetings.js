import React, { Fragment } from 'react';
import Meeting from './Meeting';
import RegionDivider from './RegionDivider';
import { Grid } from 'semantic-ui-react';

const Meetings = props => {
  const meetingsArray = props.meetingsList.map((element, index) => (
    <Meeting key={element._id} {...element} />
  ));

  return (
    <Fragment>
      <RegionDivider region={props.region} />
      <Grid container doubling columns={2}>
        {meetingsArray}
      </Grid>
    </Fragment>
  );
};

export default Meetings;
