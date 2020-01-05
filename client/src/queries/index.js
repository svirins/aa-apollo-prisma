import gql from 'graphql-tag';

export const GET_REGIONS = gql`
  query getRegions {
    __type(name: "regionType") {
      name
      enumValues {
        name
      }
    }
  }
`

export const GROUPS_LIST_QUERY = gql`
  query getGroups($filter: String, $orderBy: GroupOrderByInput, $regionSelect: regionType ) {
    groupList(filter: $filter, orderBy: $orderBy, regionSelect: $regionSelect){
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
