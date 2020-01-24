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
    citySelect: "All"
  });
  const { data, loading, error, refetch } = useQuery(GET_GROUPS_WITH_POSITION, {
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
