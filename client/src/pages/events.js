import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import { Loader } from 'semantic-ui-react'
import Error from '../components/error'
import EventList from '../components/eventsList'

const EVENTS_LIST_QUERY = gql`
  query getEvents {
    eventList(orderBy: date_ASC) {
      count
      events {
        id
        name
        date
        city
        description
        agenda
        contact
      }
    }
  }
`

const Events = () => {
  const { data, loading, error } = useQuery(EVENTS_LIST_QUERY);

  if (loading) return (<Loader>Loading</Loader>)
  if (error) return <Error errorMessage="GraphQL server signal an error to the client"/>;
  console.log(data)

  return (
    <EventList {...data}/>
  )
}

export default Events;
