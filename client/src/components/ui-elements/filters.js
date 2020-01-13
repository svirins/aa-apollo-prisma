import React, { useEffect, useState } from "react";
import { Input, Grid, Container, Icon, Dropdown } from "semantic-ui-react";
import { useInitialiseRegion, useDebounce } from "../../hooks/hooks";
import { GeolocateButton } from './geolocateButton'

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
    <Container>
    <Grid stackable>
      <Grid.Column width={9}>
        <Input
          fluid
          icon={<Icon name="search" circular link />}
          placeholder="Search..."
          value={filter}
          onChange={(e, { value }) => setSearchValue(value)}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        <Dropdown
          text="Choose Region"
          placeholder="Select Friend"
          fluid
          selection
          options={options}
          defaultValue={regionSelect}
          onChange={(e, { value }) => regionHandler(value)}
        />
      </Grid.Column>
      {/* <Grid.Column textAlign='right' width={2} verticalAlign='middle'>
        <Radio  label='Near' toggle />
      </Grid.Column> */}
      <Grid.Column width={1} verticalAlign='middle'>
        <GeolocateButton />
      </Grid.Column>

    </Grid>
    </Container>
  );
};

export default Filters;
