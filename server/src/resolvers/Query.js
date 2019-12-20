async function groupList(parent, args, context)  {
  const where = args.filter
    ? {
        OR: [
          { name_contains: args.filter },
          { description_contains: args.filter },
          { city_contains: args.filter },
          { address_contains: args.filter },
        ],
      }
    : {}
  const groups = await context.prisma.groups({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .groupsConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    groups,
    count
  }
}

async function eventList(parent, args, context)  {
  const where = args.filter
    ? {
        OR: [
          { name_contains: args.filter },
          { description_contains: args.filter },
          { city_contains: args.filter },
          { agenda_contains: args.filter },
        ],
      }
    : {}
  const events = await context.prisma.events({
    where,
    skip: args.skip,
    first: args.first,
    orderBy: args.orderBy,
  })
  const count = await context.prisma
    .eventsConnection({
      where,
    })
    .aggregate()
    .count()
  return {
    events,
    count
  }
}

module.exports = {
  groupList, eventList
}

