import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type User {
    isLoggedIn: Boolean
  }
`
  
export const resolvers = {}

// export const GROUPS_LIST = gql`
//   query getGroups {
//     groupList {
//       count
//       groups {
//         name
//         id
//       }
//     }
//   }
// `

// export const EVENTS_LIST = gql`
//   query getEvents {
//     eventList {
//       count
//       events {
//         name
//         date 
//       }
//     }
//   }
// `