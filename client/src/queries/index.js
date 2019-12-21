import gql from 'graphql-tag';

export const MEETINGS_LIST = gql`
  query getMeetings {
    groupList {
      count
      groups {
        name
        meetings {
          name
        }
      }
    }
  }
`

export const GROUPS_LIST = gql`
  query getGroups {
    groupList {
      count
      groups {
        name
        id
      }
    }
  }
`

export const EVENTS_LIST = gql`
  query getEvents {
    eventList {
      count
      events {
        name
        date 
      }
    }
  }
`

export const GET_MY_PROFILE = gql``