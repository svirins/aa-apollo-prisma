import gql from 'graphql-tag';

const GROUPS_LIST_QUERY_SIMPLIFIED = gql`
  query getGroups($filter: String) {
    groupList(filter: $filter) {
      groups {
        id
        name
        city
        region
        address
        location {
          lattitude
          longitude
        }
      }
    }
  }
`;

export default GROUPS_LIST_QUERY_SIMPLIFIED