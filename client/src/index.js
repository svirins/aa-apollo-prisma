import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import Pages from './pages';
import { resolvers, typeDefs } from './resolvers';

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
