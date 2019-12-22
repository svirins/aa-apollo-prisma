import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Header, Loading } from '../components';
import gql from 'graphql-tag';

const MEETINGS_LIST_QUERY = gql`
  query getMeetings {
    groupList {
      count
      groups {
        name
        meetings {
          name
        }
      }
    }
  }
`

export default function GroupList() {
  const { data, loading, error } = useQuery(MEETINGS_LIST_QUERY);
  if (loading) return <Loading />;
  if (error) return <p>ERROR</p>;
  console.log(data)
  return (
    <Fragment>
      <Header />
     
    </Fragment>
  );
}
