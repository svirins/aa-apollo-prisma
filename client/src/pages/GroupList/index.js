import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

import Error from '../components/error'

import GroupDisplay from './groupDisplay'
import MapDisplay from './mapDisplay'
import SearchAndNavigation from './searchAndNavigationBar'

import { Container, Loader } from "semantic-ui-react";

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
      location {
        latitude
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


const GroupsContainer = () => {
  const { data, loading, error } = useQuery(GROUPS_LIST_QUERY);

  if (loading) return (<Loader>Loading</Loader>)
  if (error) return <Error errorMessage="GraphQL server signal an error to the client"/>;
  console.log(data)

  return (
    <Container>
      <SearchAndNavigation />
      // conditional rendering GroupDisplay / MapDisplay
    </Container>
  )
}

export default GroupsContainer