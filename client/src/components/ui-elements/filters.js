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

  const foundGroupsCount = `Найдено ${props.count} групп АА `   
  const filterLabel = filter ? `Поиск по '${filter}' /` : ''
  const regionLabel = regionSelect ? ` / Регион: '${ruRegions.get(regionSelect)}'` : ''
  const cityLabel = citySelect !== 'All' ? ' / Город: ' + citySelect : ' / Город: Все города'
  
  

  const constructedFiltersString = foundGroupsCount + filterLabel + regionLabel + cityLabel


  return (
    <Segment inverted color='blue' tertiary>
      <Grid stackable>
        <Grid.Row columns={3}>
        <Grid.Column>
          <Input
            fluid
            icon={<Icon name="search" circular link />}
            placeholder="Искать по названию"
            value={filter}
            onChange={(e, { value }) => setSearchTerm(value)}
          />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            text="Выберите регион"
            placeholder="Выберите регион"
            fluid
            selection
            options={regionOptions}
            defaultValue={regionSelect}
            onChange={(e, { value }) => regionHandler(value)}
          />
        </Grid.Column>
        <Grid.Column>
          <Dropdown
            text="Выберите город"
            placeholder="Выберите город"
            fluid
            selection
            options={cityOptions}
            defaultValue={citySelect}
            onChange={(e, { value }) => cityHandler(value)}
          />
        </Grid.Column>
        </Grid.Row>
        <Grid.Row columns={1} verticalAlign="middle">
          <Grid.Column>
            <Label color="olive" tag>
              {constructedFiltersString}
            </Label>  
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Filters;
