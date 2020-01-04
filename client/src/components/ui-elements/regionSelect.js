i;

const RegionSelect = () => {
  const { data, loading, error } = useQuery(GET_REGIONS);

  return (
    <Input type="text" placeholder="Search..." action>
      <input />
      <Select options={options} defaultValue="All" label="First name" />
    </Input>
  );
};

export default RegionSelect;

<Input
  fluid
  icon={<Icon name="search" circular link />}
  placeholder="Search..."
  onChange={event => setEnteredFilter(event.target.value)}
  value={enteredFilter}
/>;
