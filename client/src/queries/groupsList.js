import gql from 'graphql-tag';

const GROUPS_LIST_QUERY = gql`
  query getGroups($filter: String, $orderBy: GroupOrderByInput ) {
    groupList(filter: $filter, orderBy: $orderBy){
      count
      groups{
        id
        name
        description
        city
        region
        phone
        email
        address
        location{
          lattitude
          longitude
        }
        meetings{
          id
          name
          weekday
          time
          type
        }
      }
    }
  }
`

export default GROUPS_LIST_QUERY