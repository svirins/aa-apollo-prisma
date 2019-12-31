import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import GroupList from '../components/group/groupList'
import SearchAndNavigation from '../components/ui-elements/searchAndNavigationBar'
import Error from '../components/ui-elements/error'
import LoadingMessage from '../components/ui-elements/loader'

import { Container } from "semantic-ui-react";

const GROUPS_LIST_QUERY = gql`
  query getGroups($filter: String, $skip: Int, $first: Int, $orderBy: GroupOrderByInput ) {
    groupList(filter: $filter, skip: $skip, first: $first, orderBy: $orderBy){
      count
      groups{
        id
        name
        description
        city
        region
        phone
        email
        address
        location{
          lattitude
          longitude
        }
        meetings{
          id
          name
          weekday
          time
          type
        }
      }
    }
  }
`

const Groups = () => {
  const [variables, setVariables] = useState({});
  const { data, loading, error, refetch } = useQuery(GROUPS_LIST_QUERY, { variables });
  useEffect(() => {
    refetch(variables);
  }, [variables]);

  if (loading) return (<LoadingMessage />)
  if (error) return <Error errorMessage="GraphQL server signal an error to the client"/>;
 
  const onFilterStringChangeHandler = () => {
    return null
  }

  return (
    <Container style={{ marginTop: '5em' }}>
      <SearchAndNavigation stringChange={onFilterStringChangeHandler}/>
      <GroupList groupData={data.groupList}/>
    </Container>
  )
}

export default Groups 