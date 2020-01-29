import React, { useState, useEffect, useMemo } from "react";
import GroupList from "../components/group/groupList";
import Filters from "../components/ui-elements/filters";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";
import { Container } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { GET_GROUPS_WITH_POSITION } from "../queries";

const Groups = () => {
  const [variables, setVariables] = useState({
    filter: "",
    regionSelect: "All",
    citySelect: "All"
  });
  const { data, loading, error, refetch } = useQuery(GET_GROUPS_WITH_POSITION, {
    variables
  });

  useEffect(() => {
    refetch(variables);
  }, [variables, refetch]);


  const memoizedError = useMemo(()=>(<Error />), [])
  const memoizedLoading = useMemo(()=>(<LoadingMessage />), [])
  if (loading) return memoizedLoading;
  if (error) return memoizedError

  const onFilterChangeHandler = value => {
    setVariables(prevState => {
      return { ...prevState, filter: value };
    });
  };
  const onRegionChangeHandler = value => {
    setVariables(prevState => {
      return { ...prevState, regionSelect: value };
    });
  };
  const onCityChangeHandler = value => {
    setVariables(prevState => {
      return { ...prevState, citySelect: value };
    });
  };


  return (
    <Container>
      <Filters
        searchHandler={onFilterChangeHandler}
        regionHandler={onRegionChangeHandler}
        cityHandler={onCityChangeHandler}
        filterValues={variables}
        count={data.groupList.count}
      />
      <GroupList groupData={data.groupList} />
    </Container>
  );
};

export default Groups;
