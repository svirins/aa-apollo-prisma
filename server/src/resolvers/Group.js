function meetings(parent, args, context) {
  return context.prisma.group({ id: parent.id }).meetings()
}

function location(parent, args, context) {
  return context.prisma.group({ id: parent.id }).location()
}
module.exports = {
  meetings, location
}
