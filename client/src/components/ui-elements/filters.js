import React, { useEffect, useState, Fragment } from "react";
import {
  Input,
  Grid,
  Icon,
  Dropdown,
  Label,
  Segment,
  Header
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

  const cityLabel = citySelect !== 'All' ? citySelect : "Все города"
  

  return (
    <Fragment>
      <Grid stackable>
        <Grid.Row columns={1} >
            <Grid.Column>
              Найдено: 
              <Label color='purple' horizontal>
                {props.count}
              </Label>
            Групп АА | Регион : 
              <Label color='purple' horizontal>
                {ruRegions.get(regionSelect)}
              </Label>
              Город : 
              <Label color='purple' horizontal>
                {cityLabel}
              </Label>
            </Grid.Column>
        </Grid.Row>
      </Grid>
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
        </Grid>
      </Segment>
    </Fragment>
  );
};

export default Filters;
