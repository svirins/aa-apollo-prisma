import React, { useState, useEffect } from "react";
import GroupList from "../components/group/groupList";
import Filters from "../components/ui-elements/filters";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";
import { Container } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { GROUPS_LIST_QUERY } from "../queries";

import { useDebounce } from "../hooks/hooks";

const Groups = () => {
  const [variables, setVariables] = useState({
    filter: "",
    regionSelect: "All",
    sortByDistance: false
  });
  const { data, loading, error, refetch } = useQuery(GROUPS_LIST_QUERY, {
    variables
  });

  useEffect(() => {
    refetch(variables);
  }, [variables, refetch]);

  if (loading) return <LoadingMessage />;
  if (error)
    return (
      <Error errorMessage="GraphQL server signal an error to the client" />
    );

  const onFilterChangeHandler = value => {
    // implement useDebounce here
    setVariables(prevState => {
      return { ...prevState, filter: value };
    });
  };
  const onRegionChangeHandler = value => {
    setVariables(prevState => {
      return { ...prevState, regionSelect: value };
    });
  };

  const onSortByDistanceChangeHandler = () => {
    setVariables(prevState => {
      return { ...prevState, sortByDistance: !prevState.sortByDistance };
    });
    // do some sort-ordering here
  };

  return (
    <Container>
      <Filters
        searchHandler={onFilterChangeHandler}
        regionHandler={onRegionChangeHandler}
        distanceHandler={onSortByDistanceChangeHandler}
        filterValues={variables}
        count={data.groupList.count}
      />
      <GroupList groupData={data.groupList} />
    </Container>
  );
};

export default Groups;
