import gql from 'graphql-tag';
import getDistance from 'geolib/es/getDistance';
import { usePosition } from 'use-position';



export const typeDefs = gql`
  extend type Group {
    distance: Float!
  }

`

export const resolvers = {

}


