function groups(parent, args, context)  {
  return context.prisma.groups()
}

module.exports = {
  groups,
}