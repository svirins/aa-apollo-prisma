import gql from 'graphql-tag';

export const GROUPS_LIST_QUERY_SIMPLIFIED = gql`
  query getGroupsFromMap($filter: String) {
    groupList(filter: $filter) {
      groups {
        id
        name
        city
        isActive
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

export const GROUPS_LIST_QUERY = gql`
  query getGroups($filter: String, $orderBy: GroupOrderByInput ) {
    groupList(filter: $filter, orderBy: $orderBy){
      count
      groups{
        id
        name
        isActive
        description
        city
        region
        phone
        email
        address
        location {
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

export const EVENTS_LIST_QUERY = gql`
  query getEvents {
    eventList(orderBy: date_ASC) {
      count
      events {
        id
        name
        date
        city
        description
        agenda
        contact
      }
    }
  }
`
