import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom'

import GroupsContainer from './GroupList';
import NearMe from './nearMe'
import Events from './events';
import Profile from './profile';
import LoginPage from './loginPage'
import FourZeroFour from './notFound'

import Header from '../components/header'
import PageContainer from '../components/page-container'
import Footer from '../components/footer'

const Pages = (props) => (
  <Fragment>
    <Header />
    <PageContainer>
      <Switch>
        <Route path="/nearme" render={(props) => <NearMe {...props}/>} />
        <Route path="/events" render={(props) => <Events {...props}/>} />
        <Route path="/profile" render={(props) => <Profile {...props}/>} />
        <Route path='/login' render={(props) => <LoginPage {...props}/>} />
        <Route path="/" exact component={GroupsContainer} />
        <FourZeroFour Route path="*" component={FourZeroFour} />
      </Switch>
    </PageContainer>
    <Footer />
  </Fragment>
);

export default Pages