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

module.exports = {
  groupList,
}

