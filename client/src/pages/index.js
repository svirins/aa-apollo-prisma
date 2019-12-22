import React, { Fragment } from 'react';
import { Router } from '@reach/router';

import GroupList from './groupList';
import NearMe from './nearMe'
import Events from './events';
import Profile from './profile';

import Header from '../components/header'
import PageContainer from '../components/page-container'
import Footer from '../components/footer'

const Pages = (props) => (
  <Fragment>
    <Header />
    <PageContainer>
      <Router primary={false} component={Fragment}>
        <GroupList path="/" />
        <NearMe path="/nearme"/>
        <Events path="/events"/>
        <Profile path="profile" />
      </Router>
    </PageContainer>
    <Footer />
  </Fragment>
);

export default Pages