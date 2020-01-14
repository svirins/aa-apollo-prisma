import React from "react";
import {
  Input,
  Grid,
  Container,
  Icon,
  Dropdown,
  Label,
  Checkbox
} from "semantic-ui-react";
import { useInitialiseRegion } from "../../hooks/hooks";
import { useQuery } from "@apollo/react-hooks";
import { GET_POSITION } from "../../queries";

const Filters = props => {
  const { data } = useQuery(GET_POSITION);
  const { error: geoError } = data;
  let disabled = geoError === "User denied Geolocation" ? true : false;
  const { searchHandler, regionHandler, distanceHandler } = props;
  const { filter, regionSelect, sortByDistance } = props.filterValues;
  const options = useInitialiseRegion();

  let filterLabel,
    regionSelectLabel = "";
  if (filter) {
    filterLabel = (
      <Label color="orange" tag>
        {filter} filter
      </Label>
    );
  }
  if (regionSelect) {
    regionSelectLabel = (
      <Label color="teal" tag>
        {regionSelect} filter
      </Label>
    );
  }

  return (
    <Container>
      <Grid stackable>
        <Grid.Column width={5}>
          <Input
            fluid
            icon={<Icon name="search" circular link />}
            placeholder="Search..."
            value={filter}
            onChange={(e, { value }) => searchHandler(value)}
          />
        </Grid.Column>
        <Grid.Column width={3}>
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
        <Grid.Column width={2} verticalAlign="middle">
          <Checkbox
            toggle
            disabled={disabled}
            checked={sortByDistance}
            label="Distance"
            onChange={() => distanceHandler()}
          />
        </Grid.Column>
        <Grid.Column width={6} verticalAlign="middle" floated="right">
          <Label color="olive" tag>
            {props.count} groups
          </Label>
          {filterLabel}
          {regionSelectLabel}
        </Grid.Column>
      </Grid>
    </Container>
  );
};

export default Filters;
