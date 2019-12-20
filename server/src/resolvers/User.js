function groups(parent, args, context) {
  return context.prisma.user({ id: parent.id }).groups()
}

function events(parent, args, context) {
  return context.prisma.user({ id: parent.id }).events()
}

module.exports = {
  groups, 
  events
}

