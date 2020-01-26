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

export const GET_CITIES = gql`
  query getCities {
    groupList {
    groups {
      city 
    }
  }
}
`


export const GROUPS_LIST_QUERY = gql`
  query getGroupsList {
    groupList {
      groups {
        id
        name
        birthday
        city
        region    
        address
        website
        location {
          lattitude
          longitude
        }
        meetings {
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
        image {
          publicId
          cloudinaryUrl
        }
        location {
          lattitude
          longitude
        }
      }
    }
  }
`
export const GET_STATISTICS = gql`
  query getStat {
    getStatistics {
      groupCount
      meetingCount
      citiesCount
      eventsCount
      groups { 
      	location {
          lattitude
          longitude
        }
      }
      meetings {
          weekday
          time
        }
    }
  }
`
export const GET_POSITION = gql` 
  query getPos
  {
    latitude @client
    longitude @client
    error @client  
  }
`  
export const GET_GROUPS_WITH_POSITION  = gql`
  query getGroups($filter: String, $orderBy: GroupOrderByInput, $regionSelect: regionType, $citySelect: String ) {
    groupList(filter: $filter, orderBy: $orderBy, regionSelect: $regionSelect, citySelect: $citySelect) {
      count
      groups{
        id
        name
        birthday
        isActive
        description
        city
        region
        phone
        email
        address
        website
        distance @client
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