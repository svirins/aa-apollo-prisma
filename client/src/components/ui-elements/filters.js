import React from "react";
import { Input, Header, Container, Icon, Dropdown } from "semantic-ui-react";
import { useInitialiseRegion } from "../../hooks/hooks";
import { useDebounce } from "../../hooks/hooks";

const Filters = props => {
  const { searchHandler, regionHandler } = props;
  const { filter, regionSelect } = props.filterValues;
  const options = useInitialiseRegion();

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
        onChange={(event, data) => regionHandler(data.value)}
      />
      <Input
        fluid
        icon={<Icon name="search" circular link />}
        placeholder="Search..."
        value={filter}
        onChange={(event, data) => searchHandler(data.value)}
      />
    </Container>
  );
};

export default Filters;
