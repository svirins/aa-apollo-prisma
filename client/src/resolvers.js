import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type User {
    isLoggedIn: Boolean
  }
`
  
export const resolvers = {}

