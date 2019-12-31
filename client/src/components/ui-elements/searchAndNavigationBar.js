import React, { useEffect, useState, useRef } from "react";
import { Input, Header, Container, Icon } from "semantic-ui-react";

const SearchAndNavigation = props => {
  const [enteredFilter, setEnteredFilter] = useState("");
  const inputRef = useRef();

  return (
    <Container style={{ marginTop: "6em" }}>
      <Header>Search and  filter:</Header>
      <Input
        fluid
        ref={inputRef}
        icon={<Icon name="search" circular link />}
        placeholder="Search..."
        onChange={props.stringChange}
        value={enteredFilter}
      />
    </Container>
  );
};

export default SearchAndNavigation;
 