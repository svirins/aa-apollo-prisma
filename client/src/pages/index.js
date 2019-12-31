import React, { Fragment, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom'

import Groups from './groups';
import NearMe from './nearMe'
import Events from './events';
import Profile from './profile';
import LoginPage from './loginPage'
import FourZeroFour from './notFound'

// implement lazy loading here
import Header from '../components/ui-elements/header'
import PageContainer from '../components/ui-elements/page-container'
import Footer from '../components/ui-elements/footer'


const Pages = (props) => (
  <Fragment>
    <Header />
    <PageContainer>
      <Switch>
        <Route path="/nearme" render={(props) => <NearMe {...props}/>} />
        <Route path="/events" render={(props) => <Events {...props}/>} />
        <Route path="/profile" render={(props) => <Profile {...props}/>} />
        <Route path='/login' render={(props) => <LoginPage {...props}/>} />
        <Route path="/" exact component={Groups} />
        <FourZeroFour Route path="*" component={FourZeroFour} />
      </Switch>
    </PageContainer>
    <Footer />
  </Fragment>
);

export default Pages