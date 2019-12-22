import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';

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

  const GroupList = props => {
    const { data, loading, error } = useQuery(MEETINGS_LIST_QUERY);
    if (loading) return ;
    if (error) return <p>ERROR</p>;
    console.log(data)
    return (
      <p>TBD!!</p>
    );
}

export default GroupList