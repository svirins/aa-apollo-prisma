import React from 'react';
import LoadingMessage from '../components/ui-elements/loader'
import Error from '../components/ui-elements/error'
import EventList from '../components/event/eventsList'

import { useQuery } from '@apollo/react-hooks';
import { EVENTS_LIST_QUERY } from '../queries'

const Events = () => {
  const { data, loading, error } = useQuery(EVENTS_LIST_QUERY);

  if (loading) return (<LoadingMessage />)
  if (error) return <Error errorMessage="GraphQL server signal an error to the client"/>;

  return (
    <EventList {...data}/>
  )
}

export default Events;
