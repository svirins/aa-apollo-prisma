import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import LoadingMessage from '../components/ui-elements/loader'
import Error from '../components/ui-elements/error'
import EventList from '../components/event/eventsList'

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

  if (loading) return (<LoadingMessage />)
  if (error) return <Error errorMessage="GraphQL server signal an error to the client"/>;

  return (
    <EventList {...data}/>
  )
}

export default Events;
