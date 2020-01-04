import React, { useEffect, useState } from "react";
import { Input, Header, Container, Icon, Dropdown } from "semantic-ui-react";

import LoadingMessage from "./loader";
import Error from "./error";

import { useQuery } from "@apollo/react-hooks";
import { GET_REGIONS } from "../../queries";



import useDebounce from '../../hooks/hooks'

const Filters = props => {
  const [selectedRegion, setSelectedRegion] = useState("")
  const [searchValue, setSearchValue] = useState("");
  const debouncedEnteredFilter = useDebounce(searchValue, 1000);
  const { data, loading, error } = useQuery(GET_REGIONS);
  const { filterHandler } = props

  useEffect(() => {
    if (debouncedEnteredFilter) { filterHandler(debouncedEnteredFilter) }
    


}, [debouncedEnteredFilter, selectedRegion]);

  if (loading) return <LoadingMessage />;
  if (error) return <Error errorMessage="GraphQL server signal an error to the client" />;

  const options = [
    {
      key: 0,
      text: "All",
      value: "All"
    }
  ];

  data.__type.enumValues.map((region, index) =>
    options.push({
      key: index + 1,
      text: region.name,
      value: region.name
    })
  );

  return (
    <Container style={{ marginTop: "6em" }}>
      <Header>Search and  filter:</Header>
      <Dropdown
        text="Choose Region"
        placeholder='Select Friend'
        fluid
        selection
        options={options}
        onChange={event => setSelectedRegion(event.target.value)}
        value={selectedRegion}
      />
      <Input
        fluid
        icon={<Icon name="search" circular link />}
        placeholder="Search..."
        onChange={event => setSearchValue(event.target.value)}
        value={searchValue}
      />
    </Container>
  );
};

export default Filters;
 


