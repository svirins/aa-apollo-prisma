import { useState, useEffect } from "react";
import { useQuery } from '@apollo/react-hooks';
import { GET_REGIONS } from '../queries'


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
      text: region.name,
      value: region.name
    })
  );
  return options
}
