function image(parent, args, context) {
  return context.prisma.event({ id: parent.id }).image()
}
function location(parent, args, context) {
  return context.prisma.event({ id: parent.id }).location()
}

module.exports = {
  image, location
}
