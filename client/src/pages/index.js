import React, { Fragment } from 'react';
import { Router } from '@reach/router';
import GroupList from './grouplist';
import NearMe from './nearme'
import Profile from './profile';

import { Footer, PageContainer } from '../components';
// navigation links located in footer

export default function Pages() {
  return (
    <Fragment>
      <PageContainer>
        <Router primary={false} component={Fragment}>
          <GroupList path="/" />
          <NearMe path="/nearme"/>
          <Profile path="profile" />
        </Router>
      </PageContainer>
      <Footer />
    </Fragment>
  );
}
