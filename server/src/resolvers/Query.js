function groupList(parent, args, context)  {
  return context.prisma.groups()
}

module.exports = {
  groupList,
}

/*
group(id: ID!): Group
groupByName(name: String): Group
groups: [Group!]
meeting(id: ID!): Meeting
meetings: [Meeting!]
*/