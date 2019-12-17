function groups(parent, args, context) {
  return context.prisma.user({ id: parent.id }).groups()
}

module.exports = {
  groups,
}

