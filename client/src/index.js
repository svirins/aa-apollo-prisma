import React from 'react';
import ReactDOM from 'react-dom';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider, useQuery } from '@apollo/react-hooks';

import Pages from './pages';
import Login from './pages/login';

import { resolvers, typeDefs } from './resolvers';
import injectStyles from './styles';


const cache = new InMemoryCache();

/* All auth logic removed! 
will be added later
*/

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/',
  }),
  resolvers,
  typeDefs,
});



/**
 * - We need a router, so we can navigate the app. We're using Reach router for this.
 *    The router chooses between which component to render, depending on the url path.
 *    ex: localhost:3000/login will render only the `Login` component
 */
 // TO DO:  add login logic later !!

const IS_LOGGED_IN = ""


// switch to <Login /> instead of <Pages /> in production
function IsLoggedIn() {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? <Pages /> : <Pages />;
}

injectStyles();

ReactDOM.render(
  <ApolloProvider client={client}>
    <IsLoggedIn />
  </ApolloProvider>,
  document.getElementById('root'),
);
