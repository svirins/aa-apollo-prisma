import React, { useState, useEffect } from "react";
import GroupList from "../components/group/groupList";
import Filters from "../components/ui-elements/filters";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";
import { Container } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { GET_GROUPS_WITH_POSITION } from "../queries";
import { useDebounce } from "../hooks/hooks";

const Groups = () => {
  const [variables, setVariables] = useState({
    filter: "",
    regionSelect: "All",
    sortByDistance: false
  });
  const { data, loading, error, refetch } = useQuery(GET_GROUPS_WITH_POSITION, {
    variables
  });

  useEffect(() => {
    refetch(variables);
  }, [variables.filter, variables.regionSelect, refetch]);

  // SORT BY DISTANCE

  useEffect(() => {
    if (variables.sortByDistance) {
      data.groupList.groups.sort((a, b) =>
        a.distance > b.distance ? 1 : b.distance > a.distance ? -1 : 0
      );
      console.log('applying distance filter')
    } else {
      refetch();
      console.log('refetch')
    }
  }, [variables.sortByDistance, data]);

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
