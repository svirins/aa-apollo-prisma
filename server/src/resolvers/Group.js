function meetings(parent, args, context) {
  return context.prisma.group({ id: parent.id }).meetings()
}

module.exports = {
  meetings,
}
