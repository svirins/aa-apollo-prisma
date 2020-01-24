// attention@ isActive works only on true values

async function groupList(parent, args, context)  {
  const citySelect = args.citySelect === "All" ? undefined : args.citySelect
  const regionSelect = args.regionSelect === "All" ? undefined : args.regionSelect
  const where = (args.filter &&  args.filter !== "") || regionSelect || citySelect
    ? {
        AND: [
          { name_contains: args.filter },
          { region_in: regionSelect },
          { city_in: citySelect }
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


async function getStatistics(parent, args, context)  {
  // calculate groups
  const groupCount = await context.prisma
    .groupsConnection()
    .aggregate()
    .count()
  // calculate unique cities
  const groups = await context.prisma.groups()  
  const meetings = await context.prisma.meetings()  

  const groupsCities = groups.map(el => el.city)
  const citiesCount = [...new Set(groupsCities)].length
  // calculate meetings
  const meetingCount = await context.prisma
    .meetingsConnection()
    .aggregate()
    .count()
  // calculate events
  const eventsCount = await context.prisma
  .eventsConnection()
  .aggregate()
  .count()

  return {
    groupCount,
    citiesCount,
    meetingCount,
    eventsCount,
    groups,
    meetings
  }
}



module.exports = {
  groupList,
  eventList,
  getStatistics
}

