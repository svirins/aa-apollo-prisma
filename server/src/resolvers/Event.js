function image(parent, args, context) {
  return context.prisma.event({ id: parent.id }).image()
}
function location(parent, args, context) {
  return context.prisma.event({ id: parent.id }).location()
}
function contact(parent, args, context) {
  return context.prisma.event({ id: parent.id }).contact()
}

module.exports = {
  image, location, contact
}
