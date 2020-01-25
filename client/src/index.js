import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "mapbox-gl/dist/mapbox-gl.css";
import 'semantic-ui-less/semantic.less'
import './App.css';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { resolvers, typeDefs } from './resolvers';

import Pages from './pages';

// configure apollo
const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: 'http://localhost:4000/',
  }),
  resolvers,
  typeDefs,
});


ReactDOM.render(
    <ApolloProvider client={client}>
      <BrowserRouter>
          <Pages />
      </BrowserRouter>
    </ApolloProvider>,
   document.getElementById('root'),
);
