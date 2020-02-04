import gql from "graphql-tag";
import getDistance from "geolib/es/getDistance";
import { GET_POSITION } from "./queries";

export const typeDefs = gql`
  extend type Group {
    distance: Float!
  }
`;

export const resolvers = {
  Group: {
    distance: (group, _args, { cache }) => {
      const { lattitude: groupLat, longitude: groupLong } = group.location;
      const {
        latitude: userLat,
        longitude: userLong
      } = cache.readQuery({ query: GET_POSITION });
      const dist = getDistance(
        { latitude: groupLat, longitude: groupLong },
        { latitude: userLat, longitude: userLong }
      );
      return dist;
    }
  }
};
