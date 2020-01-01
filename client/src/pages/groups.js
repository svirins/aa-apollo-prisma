import React, { useState, useEffect } from 'react'
import GroupList from '../components/group/groupList'
import SearchAndNavigation from '../components/ui-elements/searchAndNavigationBar'
import Error from '../components/ui-elements/error'
import LoadingMessage from '../components/ui-elements/loader'
import { Container } from "semantic-ui-react";

import { useQuery } from '@apollo/react-hooks';
import GROUPS_LIST_QUERY from '../queries/groupsList'


const Groups = () => {
  const [variables, setVariables] = useState({});
  const { data, loading, error, refetch } = useQuery(GROUPS_LIST_QUERY, { variables });
  useEffect(() => {
    refetch(variables);
  }, [variables]);

  if (loading) return (<LoadingMessage />)
  if (error) return <Error errorMessage="GraphQL server signal an error to the client"/>;
 
  const onFilterStringChangeHandler = (value) => {
    setVariables({filter: value})
    console.log(variables)
  }

  return (
    <Container style={{ marginTop: '5em' }}>
      <SearchAndNavigation filterHandler={onFilterStringChangeHandler}/>
      <GroupList groupData={data.groupList}/>
    </Container>
  )
}

export default Groups 