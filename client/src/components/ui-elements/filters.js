import React, { useEffect, useState } from "react";
import { Input, Header, Container, Icon, Dropdown } from "semantic-ui-react";
import { useInitialiseRegion, useDebounce } from "../../hooks/hooks";

const Filters = props => {
  const { searchHandler, regionHandler } = props;
  const { filter, regionSelect } = props.filterValues;

  const [searchValue, setSearchValue] = useState(filter);
  const options = useInitialiseRegion();
  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    searchHandler(debouncedSearchValue);
  }, [debouncedSearchValue]);

  return (
    <Container style={{ marginTop: "6em" }}>
      <Header>Search and filter:</Header>
      <Dropdown
        text="Choose Region"
        placeholder="Select Friend"
        fluid
        selection
        options={options}
        defaultValue={regionSelect}
        onChange={(e, { value }) => regionHandler(value)}
      />
      <Input
        fluid
        icon={<Icon name="search" circular link />}
        placeholder="Search..."
        value={filter}
        onChange={(e, { value }) => setSearchValue(value)}
      />
    </Container>
  );
};

export default Filters;
