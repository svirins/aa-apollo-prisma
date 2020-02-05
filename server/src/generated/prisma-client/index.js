"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Group",
    embedded: false
  },
  {
    name: "Meeting",
    embedded: false
  },
  {
    name: "Event",
    embedded: false
  },
  {
    name: "Location",
    embedded: false
  },
  {
    name: "Image",
    embedded: false
  },
  {
    name: "Contact",
    embedded: false
  },
  {
    name: "Weekday",
    embedded: false
  },
  {
    name: "meetingType",
    embedded: false
  },
  {
    name: "regionType",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://aa-locator-dfc4723d86.herokuapp.com/aa-locator/dev`
});
exports.prisma = new exports.Prisma();
