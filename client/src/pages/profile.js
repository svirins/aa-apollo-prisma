import React, { Fragment } from 'react';
import { useQuery } from '@apollo/react-hooks';

import { Loading, Header } from '../components';

import { GET_MY_PROFILE } from '../queries'

export default function Profile() {
  const { data, loading, error } = useQuery(
    GET_MY_PROFILE,
    { fetchPolicy: "network-only" }
  );
  if (loading) return <Loading />;
  if (error) return <p>ERROR: {error.message}</p>;

  return (
    <Fragment>
      <Header>Some Data</Header>
        <p>To be done later</p>
    </Fragment>
  );
}
