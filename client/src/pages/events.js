import React, { useMemo } from 'react';
import LoadingMessage from '../components/ui-elements/loader'
import Error from '../components/ui-elements/error'
import EventList from '../components/event/eventsList'

import { useQuery } from '@apollo/react-hooks';
import { EVENTS_LIST_QUERY } from '../queries'

const Events = () => {
  const { data, loading, error } = useQuery(EVENTS_LIST_QUERY);
  const memoizedError = useMemo(()=>(<Error />), [])
  const memoizedLoading = useMemo(()=>(<LoadingMessage />), [])
  
  if (loading) return memoizedLoading;
  if (error) return memoizedError

  return (<EventList {...data}/>)
}

export default Events;
