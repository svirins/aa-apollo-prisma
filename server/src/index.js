require('dotenv').config()

const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Meeting = require('./resolvers/Meeting')
const Group = require('./resolvers/Group')
const Event = require('./resolvers/Event')

const resolvers = {
    Query,
    Mutation,
    User,
    Meeting,
    Group,
    Event
}
 
const server = new GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers,
    engine: {
      apiKey: "service:aa-belarus-locator:JJzRvrRXVvwolM3WeSCQlw",
    },
    context: request => {
      return {
        ...request,
        prisma,
      }
    },});

const options = {
  port: process.env.PORT || 4000
}

// const options = {
//   port: process.env.PORT || 4000,
//   endpoint: '/graphql'
// }

server.start(options, ({ port }) =>
  console.log(
    `🚀 Server started, listening on port ${port} for incoming requests.`,
  ),
)
