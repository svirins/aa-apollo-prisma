import React, { useEffect, useState } from "react";
import { Input, Header, Container, Icon } from "semantic-ui-react";

import useDebounce from '../../hooks/hooks'

const SearchAndNavigation = props => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const debouncedEnteredFilter = useDebounce(enteredFilter, 1000);
  const { filterHandler } = props

  useEffect(() => {
      if (debouncedEnteredFilter) {
        filterHandler(debouncedEnteredFilter)
    }}, [debouncedEnteredFilter]);


  return (
    <Container style={{ marginTop: "6em" }}>
      <Header>Search and  filter:</Header>
      
      <Input
        fluid
        icon={<Icon name="search" circular link />}
        placeholder="Search..."
        onChange={event => setEnteredFilter(event.target.value)}
        value={enteredFilter}
      />


    </Container>
  );
};

export default SearchAndNavigation;
 


