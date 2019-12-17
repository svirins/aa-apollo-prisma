const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

// resolvers comes here
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Meeting = require('./resolvers/Meeting')
const Group = require('./resolvers/Group')

const resolvers = {
    Query,
    Mutation,
    User,
    Meeting,
    Group
}
 
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },});
server.start(() => console.log(`Server is running on http://localhost:4000`));