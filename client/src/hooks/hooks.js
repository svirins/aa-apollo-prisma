import { useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_REGIONS, GET_CITIES } from '../queries'
import { ruRegions} from '../const/globalConst'

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

export const useInitialiseRegion = () => {
  const { data, loading, error } = useQuery(GET_REGIONS);
  if (loading || error) return []
  const options = [];
  data.__type.enumValues.map((region, index) =>
    options.push({
      key: index ,
      text: ruRegions.get(region.name),
      value: region.name
    })
  );
  return options
}

export const useInitialiseCity = () => {
  const { data, loading, error } = useQuery(GET_CITIES);
  if (loading || error) return []
  const options = [{
      key: 0 ,
      text: 'All',
      value: 'All'
  }];
  const sorted = [...new Set(data.groupList.groups.map(el=>el.city))].sort()
  sorted.map((city, index) =>
    options.push({
      key: index + 1,
      text: city,
      value: city
    })
  )

  return options
}