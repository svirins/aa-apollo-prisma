import React, { useEffect, useState } from "react";
import {
  Input,
  Grid,
  Icon,
  Dropdown,
  Label,
  Segment
} from "semantic-ui-react";
import { useInitialiseRegion, useInitialiseCity } from "../../hooks/hooks";
import { ruRegions } from '../../const/globalConst'
import { useDebounce } from "../../hooks/hooks";

const Filters = props => {
  // managing debounced value
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  useEffect(
    () => {
      if (debouncedSearchTerm) {
        searchHandler(debouncedSearchTerm)
      }}, 
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  // rest of it
  const { searchHandler, regionHandler, cityHandler } = props;
  const { filter, regionSelect, citySelect } = props.filterValues;
  const regionOptions = useInitialiseRegion();
  const cityOptions = useInitialiseCity()

  let filterLabel,
    regionSelectLabel,
    citySelectLabel = "";

  if (filter) {
    filterLabel = (
      <Label color="violet" tag>
        `{filter}`
      </Label>
    );
  }
  if (regionSelect) {
    regionSelectLabel = (
      <Label color="purple" tag>
        {ruRegions.get(regionSelect)}
      </Label>
    );
  }
  if (citySelect) {
      citySelectLabel = (
      <Label color="pink" tag>
        {citySelect}
      </Label>
    );
  }



  return (
    <Segment inverted color='blue' tertiary>
      <Grid stackable>
        <Grid.Column width={3}>
          <Input
            fluid
            icon={<Icon name="search" circular link />}
            placeholder="Search..."
            value={filter}
            onChange={(e, { value }) => setSearchTerm(value)}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Dropdown
            text="Choose Region"
            placeholder="Choose Region"
            fluid
            selection
            options={regionOptions}
            defaultValue={regionSelect}
            onChange={(e, { value }) => regionHandler(value)}
          />
        </Grid.Column>
        <Grid.Column width={3}>
          <Dropdown
            text="Choose City"
            placeholder="Choose City"
            fluid
            selection
            options={cityOptions}
            defaultValue={citySelect}
            onChange={(e, { value }) => cityHandler(value)}
          />
        </Grid.Column>
        <Grid.Column width={7} verticalAlign="middle" floated="right"  textAlign='right'>
          <Label color="olive" tag>
            {props.count} groups
          </Label>
          {filterLabel}
          {regionSelectLabel}
          {citySelectLabel}       
        </Grid.Column>
      </Grid>
    </Segment>
  );
};

export default Filters;
