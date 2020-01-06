import React, { useState, useEffect } from "react";
import GroupList from "../components/group/groupList";
import Filters from "../components/ui-elements/filters";
import Error from "../components/ui-elements/error";
import LoadingMessage from "../components/ui-elements/loader";
import SearchSummary from "../components/ui-elements/searchSummary";
import { Container } from "semantic-ui-react";
import { useQuery } from "@apollo/react-hooks";
import { GROUPS_LIST_QUERY } from "../queries";

const Groups = () => {
  const [variables, setVariables] = useState({
    filter: "",
    regionSelect: "All"
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
    setVariables(prevState => {
      return { ...prevState, filter: value };
    });
  };
  const onRegionChangeHandler = value => {
    setVariables(prevState => {
      return { ...prevState, regionSelect: value };
    });
  };
  return (
    <Container style={{ marginTop: "5em" }}>
      <Filters
        searchHandler={onFilterChangeHandler}
        regionHandler={onRegionChangeHandler}
        filterValues={variables}
      />
      <SearchSummary count={data.groupList.count} searchParams={variables} />
      <GroupList groupData={data.groupList} />
    </Container>
  );
};

export default Groups;
