import React, { useEffect, useState, useRef } from "react";
import { Input, Header, Container, Icon } from "semantic-ui-react";

import useDebounce from '../../hooks/hooks'

const SearchAndNavigation = props => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const debouncedEnteredFilter = useDebounce(enteredFilter, 750);

  useEffect(() => {
      if (debouncedEnteredFilter) {
        props.filterHandler(debouncedEnteredFilter)
    }}, [debouncedEnteredFilter]);


  return (
    <Container style={{ marginTop: "6em" }}>
      <Header>Search and  filter:</Header>
      
      <Input
        fluid
        icon={<Icon name="search" circular link />}
        placeholder="Search..."
        onChange={event => setEnteredFilter(event.target.value)}
      />


    </Container>
  );
};

export default SearchAndNavigation;
 


