module.exports = {
        typeDefs: // Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

/* GraphQL */ `type AggregateEvent {
  count: Int!
}

type AggregateGroup {
  count: Int!
}

type AggregateLocation {
  count: Int!
}

type AggregateMeeting {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

type Event {
  id: ID!
  author: User!
  name: String!
  date: DateTime!
  city: String!
  description: String!
  agenda: String
  contact: String
}

type EventConnection {
  pageInfo: PageInfo!
  edges: [EventEdge]!
  aggregate: AggregateEvent!
}

input EventCreateInput {
  id: ID
  author: UserCreateOneWithoutEventsInput!
  name: String!
  date: DateTime!
  city: String!
  description: String!
  agenda: String
  contact: String
}

input EventCreateManyWithoutAuthorInput {
  create: [EventCreateWithoutAuthorInput!]
  connect: [EventWhereUniqueInput!]
}

input EventCreateWithoutAuthorInput {
  id: ID
  name: String!
  date: DateTime!
  city: String!
  description: String!
  agenda: String
  contact: String
}

type EventEdge {
  node: Event!
  cursor: String!
}

enum EventOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  date_ASC
  date_DESC
  city_ASC
  city_DESC
  description_ASC
  description_DESC
  agenda_ASC
  agenda_DESC
  contact_ASC
  contact_DESC
}

type EventPreviousValues {
  id: ID!
  name: String!
  date: DateTime!
  city: String!
  description: String!
  agenda: String
  contact: String
}

input EventScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  agenda: String
  agenda_not: String
  agenda_in: [String!]
  agenda_not_in: [String!]
  agenda_lt: String
  agenda_lte: String
  agenda_gt: String
  agenda_gte: String
  agenda_contains: String
  agenda_not_contains: String
  agenda_starts_with: String
  agenda_not_starts_with: String
  agenda_ends_with: String
  agenda_not_ends_with: String
  contact: String
  contact_not: String
  contact_in: [String!]
  contact_not_in: [String!]
  contact_lt: String
  contact_lte: String
  contact_gt: String
  contact_gte: String
  contact_contains: String
  contact_not_contains: String
  contact_starts_with: String
  contact_not_starts_with: String
  contact_ends_with: String
  contact_not_ends_with: String
  AND: [EventScalarWhereInput!]
  OR: [EventScalarWhereInput!]
  NOT: [EventScalarWhereInput!]
}

type EventSubscriptionPayload {
  mutation: MutationType!
  node: Event
  updatedFields: [String!]
  previousValues: EventPreviousValues
}

input EventSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: EventWhereInput
  AND: [EventSubscriptionWhereInput!]
  OR: [EventSubscriptionWhereInput!]
  NOT: [EventSubscriptionWhereInput!]
}

input EventUpdateInput {
  author: UserUpdateOneRequiredWithoutEventsInput
  name: String
  date: DateTime
  city: String
  description: String
  agenda: String
  contact: String
}

input EventUpdateManyDataInput {
  name: String
  date: DateTime
  city: String
  description: String
  agenda: String
  contact: String
}

input EventUpdateManyMutationInput {
  name: String
  date: DateTime
  city: String
  description: String
  agenda: String
  contact: String
}

input EventUpdateManyWithoutAuthorInput {
  create: [EventCreateWithoutAuthorInput!]
  delete: [EventWhereUniqueInput!]
  connect: [EventWhereUniqueInput!]
  set: [EventWhereUniqueInput!]
  disconnect: [EventWhereUniqueInput!]
  update: [EventUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [EventUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [EventScalarWhereInput!]
  updateMany: [EventUpdateManyWithWhereNestedInput!]
}

input EventUpdateManyWithWhereNestedInput {
  where: EventScalarWhereInput!
  data: EventUpdateManyDataInput!
}

input EventUpdateWithoutAuthorDataInput {
  name: String
  date: DateTime
  city: String
  description: String
  agenda: String
  contact: String
}

input EventUpdateWithWhereUniqueWithoutAuthorInput {
  where: EventWhereUniqueInput!
  data: EventUpdateWithoutAuthorDataInput!
}

input EventUpsertWithWhereUniqueWithoutAuthorInput {
  where: EventWhereUniqueInput!
  update: EventUpdateWithoutAuthorDataInput!
  create: EventCreateWithoutAuthorInput!
}

input EventWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  author: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  date: DateTime
  date_not: DateTime
  date_in: [DateTime!]
  date_not_in: [DateTime!]
  date_lt: DateTime
  date_lte: DateTime
  date_gt: DateTime
  date_gte: DateTime
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  agenda: String
  agenda_not: String
  agenda_in: [String!]
  agenda_not_in: [String!]
  agenda_lt: String
  agenda_lte: String
  agenda_gt: String
  agenda_gte: String
  agenda_contains: String
  agenda_not_contains: String
  agenda_starts_with: String
  agenda_not_starts_with: String
  agenda_ends_with: String
  agenda_not_ends_with: String
  contact: String
  contact_not: String
  contact_in: [String!]
  contact_not_in: [String!]
  contact_lt: String
  contact_lte: String
  contact_gt: String
  contact_gte: String
  contact_contains: String
  contact_not_contains: String
  contact_starts_with: String
  contact_not_starts_with: String
  contact_ends_with: String
  contact_not_ends_with: String
  AND: [EventWhereInput!]
  OR: [EventWhereInput!]
  NOT: [EventWhereInput!]
}

input EventWhereUniqueInput {
  id: ID
}

type Group {
  id: ID!
  createdAt: DateTime!
  author: User!
  name: String!
  description: String!
  city: String!
  region: regionType!
  isActive: Boolean
  phone: String
  email: String
  address: String
  location: Location
  meetings(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meeting!]
}

type GroupConnection {
  pageInfo: PageInfo!
  edges: [GroupEdge]!
  aggregate: AggregateGroup!
}

input GroupCreateInput {
  id: ID
  author: UserCreateOneWithoutGroupsInput!
  name: String
  description: String
  city: String!
  region: regionType!
  isActive: Boolean
  phone: String
  email: String
  address: String
  location: LocationCreateOneInput
  meetings: MeetingCreateManyWithoutGroupInput
}

input GroupCreateManyWithoutAuthorInput {
  create: [GroupCreateWithoutAuthorInput!]
  connect: [GroupWhereUniqueInput!]
}

input GroupCreateOneWithoutMeetingsInput {
  create: GroupCreateWithoutMeetingsInput
  connect: GroupWhereUniqueInput
}

input GroupCreateWithoutAuthorInput {
  id: ID
  name: String
  description: String
  city: String!
  region: regionType!
  isActive: Boolean
  phone: String
  email: String
  address: String
  location: LocationCreateOneInput
  meetings: MeetingCreateManyWithoutGroupInput
}

input GroupCreateWithoutMeetingsInput {
  id: ID
  author: UserCreateOneWithoutGroupsInput!
  name: String
  description: String
  city: String!
  region: regionType!
  isActive: Boolean
  phone: String
  email: String
  address: String
  location: LocationCreateOneInput
}

type GroupEdge {
  node: Group!
  cursor: String!
}

enum GroupOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  city_ASC
  city_DESC
  region_ASC
  region_DESC
  isActive_ASC
  isActive_DESC
  phone_ASC
  phone_DESC
  email_ASC
  email_DESC
  address_ASC
  address_DESC
}

type GroupPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  description: String!
  city: String!
  region: regionType!
  isActive: Boolean
  phone: String
  email: String
  address: String
}

input GroupScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  region: regionType
  region_not: regionType
  region_in: [regionType!]
  region_not_in: [regionType!]
  isActive: Boolean
  isActive_not: Boolean
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  AND: [GroupScalarWhereInput!]
  OR: [GroupScalarWhereInput!]
  NOT: [GroupScalarWhereInput!]
}

type GroupSubscriptionPayload {
  mutation: MutationType!
  node: Group
  updatedFields: [String!]
  previousValues: GroupPreviousValues
}

input GroupSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GroupWhereInput
  AND: [GroupSubscriptionWhereInput!]
  OR: [GroupSubscriptionWhereInput!]
  NOT: [GroupSubscriptionWhereInput!]
}

input GroupUpdateInput {
  author: UserUpdateOneRequiredWithoutGroupsInput
  name: String
  description: String
  city: String
  region: regionType
  isActive: Boolean
  phone: String
  email: String
  address: String
  location: LocationUpdateOneInput
  meetings: MeetingUpdateManyWithoutGroupInput
}

input GroupUpdateManyDataInput {
  name: String
  description: String
  city: String
  region: regionType
  isActive: Boolean
  phone: String
  email: String
  address: String
}

input GroupUpdateManyMutationInput {
  name: String
  description: String
  city: String
  region: regionType
  isActive: Boolean
  phone: String
  email: String
  address: String
}

input GroupUpdateManyWithoutAuthorInput {
  create: [GroupCreateWithoutAuthorInput!]
  delete: [GroupWhereUniqueInput!]
  connect: [GroupWhereUniqueInput!]
  set: [GroupWhereUniqueInput!]
  disconnect: [GroupWhereUniqueInput!]
  update: [GroupUpdateWithWhereUniqueWithoutAuthorInput!]
  upsert: [GroupUpsertWithWhereUniqueWithoutAuthorInput!]
  deleteMany: [GroupScalarWhereInput!]
  updateMany: [GroupUpdateManyWithWhereNestedInput!]
}

input GroupUpdateManyWithWhereNestedInput {
  where: GroupScalarWhereInput!
  data: GroupUpdateManyDataInput!
}

input GroupUpdateOneRequiredWithoutMeetingsInput {
  create: GroupCreateWithoutMeetingsInput
  update: GroupUpdateWithoutMeetingsDataInput
  upsert: GroupUpsertWithoutMeetingsInput
  connect: GroupWhereUniqueInput
}

input GroupUpdateWithoutAuthorDataInput {
  name: String
  description: String
  city: String
  region: regionType
  isActive: Boolean
  phone: String
  email: String
  address: String
  location: LocationUpdateOneInput
  meetings: MeetingUpdateManyWithoutGroupInput
}

input GroupUpdateWithoutMeetingsDataInput {
  author: UserUpdateOneRequiredWithoutGroupsInput
  name: String
  description: String
  city: String
  region: regionType
  isActive: Boolean
  phone: String
  email: String
  address: String
  location: LocationUpdateOneInput
}

input GroupUpdateWithWhereUniqueWithoutAuthorInput {
  where: GroupWhereUniqueInput!
  data: GroupUpdateWithoutAuthorDataInput!
}

input GroupUpsertWithoutMeetingsInput {
  update: GroupUpdateWithoutMeetingsDataInput!
  create: GroupCreateWithoutMeetingsInput!
}

input GroupUpsertWithWhereUniqueWithoutAuthorInput {
  where: GroupWhereUniqueInput!
  update: GroupUpdateWithoutAuthorDataInput!
  create: GroupCreateWithoutAuthorInput!
}

input GroupWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  author: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  region: regionType
  region_not: regionType
  region_in: [regionType!]
  region_not_in: [regionType!]
  isActive: Boolean
  isActive_not: Boolean
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  location: LocationWhereInput
  meetings_every: MeetingWhereInput
  meetings_some: MeetingWhereInput
  meetings_none: MeetingWhereInput
  AND: [GroupWhereInput!]
  OR: [GroupWhereInput!]
  NOT: [GroupWhereInput!]
}

input GroupWhereUniqueInput {
  id: ID
}

type Location {
  id: ID!
  lattitude: Float
  longitude: Float
}

type LocationConnection {
  pageInfo: PageInfo!
  edges: [LocationEdge]!
  aggregate: AggregateLocation!
}

input LocationCreateInput {
  id: ID
  lattitude: Float
  longitude: Float
}

input LocationCreateOneInput {
  create: LocationCreateInput
  connect: LocationWhereUniqueInput
}

type LocationEdge {
  node: Location!
  cursor: String!
}

enum LocationOrderByInput {
  id_ASC
  id_DESC
  lattitude_ASC
  lattitude_DESC
  longitude_ASC
  longitude_DESC
}

type LocationPreviousValues {
  id: ID!
  lattitude: Float
  longitude: Float
}

type LocationSubscriptionPayload {
  mutation: MutationType!
  node: Location
  updatedFields: [String!]
  previousValues: LocationPreviousValues
}

input LocationSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: LocationWhereInput
  AND: [LocationSubscriptionWhereInput!]
  OR: [LocationSubscriptionWhereInput!]
  NOT: [LocationSubscriptionWhereInput!]
}

input LocationUpdateDataInput {
  lattitude: Float
  longitude: Float
}

input LocationUpdateInput {
  lattitude: Float
  longitude: Float
}

input LocationUpdateManyMutationInput {
  lattitude: Float
  longitude: Float
}

input LocationUpdateOneInput {
  create: LocationCreateInput
  update: LocationUpdateDataInput
  upsert: LocationUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: LocationWhereUniqueInput
}

input LocationUpsertNestedInput {
  update: LocationUpdateDataInput!
  create: LocationCreateInput!
}

input LocationWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  lattitude: Float
  lattitude_not: Float
  lattitude_in: [Float!]
  lattitude_not_in: [Float!]
  lattitude_lt: Float
  lattitude_lte: Float
  lattitude_gt: Float
  lattitude_gte: Float
  longitude: Float
  longitude_not: Float
  longitude_in: [Float!]
  longitude_not_in: [Float!]
  longitude_lt: Float
  longitude_lte: Float
  longitude_gt: Float
  longitude_gte: Float
  AND: [LocationWhereInput!]
  OR: [LocationWhereInput!]
  NOT: [LocationWhereInput!]
}

input LocationWhereUniqueInput {
  id: ID
}

scalar Long

type Meeting {
  id: ID!
  group: Group!
  name: String!
  weekday: Weekday!
  time: DateTime!
  type: meetingType
}

type MeetingConnection {
  pageInfo: PageInfo!
  edges: [MeetingEdge]!
  aggregate: AggregateMeeting!
}

input MeetingCreateInput {
  id: ID
  group: GroupCreateOneWithoutMeetingsInput!
  name: String
  weekday: Weekday!
  time: DateTime!
  type: meetingType
}

input MeetingCreateManyWithoutGroupInput {
  create: [MeetingCreateWithoutGroupInput!]
  connect: [MeetingWhereUniqueInput!]
}

input MeetingCreateWithoutGroupInput {
  id: ID
  name: String
  weekday: Weekday!
  time: DateTime!
  type: meetingType
}

type MeetingEdge {
  node: Meeting!
  cursor: String!
}

enum MeetingOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  weekday_ASC
  weekday_DESC
  time_ASC
  time_DESC
  type_ASC
  type_DESC
}

type MeetingPreviousValues {
  id: ID!
  name: String!
  weekday: Weekday!
  time: DateTime!
  type: meetingType
}

input MeetingScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  weekday: Weekday
  weekday_not: Weekday
  weekday_in: [Weekday!]
  weekday_not_in: [Weekday!]
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  type: meetingType
  type_not: meetingType
  type_in: [meetingType!]
  type_not_in: [meetingType!]
  AND: [MeetingScalarWhereInput!]
  OR: [MeetingScalarWhereInput!]
  NOT: [MeetingScalarWhereInput!]
}

type MeetingSubscriptionPayload {
  mutation: MutationType!
  node: Meeting
  updatedFields: [String!]
  previousValues: MeetingPreviousValues
}

input MeetingSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: MeetingWhereInput
  AND: [MeetingSubscriptionWhereInput!]
  OR: [MeetingSubscriptionWhereInput!]
  NOT: [MeetingSubscriptionWhereInput!]
}

enum meetingType {
  Open
  Closed
}

input MeetingUpdateInput {
  group: GroupUpdateOneRequiredWithoutMeetingsInput
  name: String
  weekday: Weekday
  time: DateTime
  type: meetingType
}

input MeetingUpdateManyDataInput {
  name: String
  weekday: Weekday
  time: DateTime
  type: meetingType
}

input MeetingUpdateManyMutationInput {
  name: String
  weekday: Weekday
  time: DateTime
  type: meetingType
}

input MeetingUpdateManyWithoutGroupInput {
  create: [MeetingCreateWithoutGroupInput!]
  delete: [MeetingWhereUniqueInput!]
  connect: [MeetingWhereUniqueInput!]
  set: [MeetingWhereUniqueInput!]
  disconnect: [MeetingWhereUniqueInput!]
  update: [MeetingUpdateWithWhereUniqueWithoutGroupInput!]
  upsert: [MeetingUpsertWithWhereUniqueWithoutGroupInput!]
  deleteMany: [MeetingScalarWhereInput!]
  updateMany: [MeetingUpdateManyWithWhereNestedInput!]
}

input MeetingUpdateManyWithWhereNestedInput {
  where: MeetingScalarWhereInput!
  data: MeetingUpdateManyDataInput!
}

input MeetingUpdateWithoutGroupDataInput {
  name: String
  weekday: Weekday
  time: DateTime
  type: meetingType
}

input MeetingUpdateWithWhereUniqueWithoutGroupInput {
  where: MeetingWhereUniqueInput!
  data: MeetingUpdateWithoutGroupDataInput!
}

input MeetingUpsertWithWhereUniqueWithoutGroupInput {
  where: MeetingWhereUniqueInput!
  update: MeetingUpdateWithoutGroupDataInput!
  create: MeetingCreateWithoutGroupInput!
}

input MeetingWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  group: GroupWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  weekday: Weekday
  weekday_not: Weekday
  weekday_in: [Weekday!]
  weekday_not_in: [Weekday!]
  time: DateTime
  time_not: DateTime
  time_in: [DateTime!]
  time_not_in: [DateTime!]
  time_lt: DateTime
  time_lte: DateTime
  time_gt: DateTime
  time_gte: DateTime
  type: meetingType
  type_not: meetingType
  type_in: [meetingType!]
  type_not_in: [meetingType!]
  AND: [MeetingWhereInput!]
  OR: [MeetingWhereInput!]
  NOT: [MeetingWhereInput!]
}

input MeetingWhereUniqueInput {
  id: ID
}

type Mutation {
  createEvent(data: EventCreateInput!): Event!
  updateEvent(data: EventUpdateInput!, where: EventWhereUniqueInput!): Event
  updateManyEvents(data: EventUpdateManyMutationInput!, where: EventWhereInput): BatchPayload!
  upsertEvent(where: EventWhereUniqueInput!, create: EventCreateInput!, update: EventUpdateInput!): Event!
  deleteEvent(where: EventWhereUniqueInput!): Event
  deleteManyEvents(where: EventWhereInput): BatchPayload!
  createGroup(data: GroupCreateInput!): Group!
  updateGroup(data: GroupUpdateInput!, where: GroupWhereUniqueInput!): Group
  updateManyGroups(data: GroupUpdateManyMutationInput!, where: GroupWhereInput): BatchPayload!
  upsertGroup(where: GroupWhereUniqueInput!, create: GroupCreateInput!, update: GroupUpdateInput!): Group!
  deleteGroup(where: GroupWhereUniqueInput!): Group
  deleteManyGroups(where: GroupWhereInput): BatchPayload!
  createLocation(data: LocationCreateInput!): Location!
  updateLocation(data: LocationUpdateInput!, where: LocationWhereUniqueInput!): Location
  updateManyLocations(data: LocationUpdateManyMutationInput!, where: LocationWhereInput): BatchPayload!
  upsertLocation(where: LocationWhereUniqueInput!, create: LocationCreateInput!, update: LocationUpdateInput!): Location!
  deleteLocation(where: LocationWhereUniqueInput!): Location
  deleteManyLocations(where: LocationWhereInput): BatchPayload!
  createMeeting(data: MeetingCreateInput!): Meeting!
  updateMeeting(data: MeetingUpdateInput!, where: MeetingWhereUniqueInput!): Meeting
  updateManyMeetings(data: MeetingUpdateManyMutationInput!, where: MeetingWhereInput): BatchPayload!
  upsertMeeting(where: MeetingWhereUniqueInput!, create: MeetingCreateInput!, update: MeetingUpdateInput!): Meeting!
  deleteMeeting(where: MeetingWhereUniqueInput!): Meeting
  deleteManyMeetings(where: MeetingWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  event(where: EventWhereUniqueInput!): Event
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event]!
  eventsConnection(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): EventConnection!
  group(where: GroupWhereUniqueInput!): Group
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group]!
  groupsConnection(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GroupConnection!
  location(where: LocationWhereUniqueInput!): Location
  locations(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Location]!
  locationsConnection(where: LocationWhereInput, orderBy: LocationOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): LocationConnection!
  meeting(where: MeetingWhereUniqueInput!): Meeting
  meetings(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Meeting]!
  meetingsConnection(where: MeetingWhereInput, orderBy: MeetingOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): MeetingConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

enum regionType {
  Minskaya
  Brestskaya
  Gomelskaya
  Mogilevskaya
  Grodnenskaya
  Vitebskaya
}

type Subscription {
  event(where: EventSubscriptionWhereInput): EventSubscriptionPayload
  group(where: GroupSubscriptionWhereInput): GroupSubscriptionPayload
  location(where: LocationSubscriptionWhereInput): LocationSubscriptionPayload
  meeting(where: MeetingSubscriptionWhereInput): MeetingSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
  email: String!
  password: String!
  groups(where: GroupWhereInput, orderBy: GroupOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Group!]
  events(where: EventWhereInput, orderBy: EventOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Event!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
  email: String!
  password: String!
  groups: GroupCreateManyWithoutAuthorInput
  events: EventCreateManyWithoutAuthorInput
}

input UserCreateOneWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutGroupsInput {
  create: UserCreateWithoutGroupsInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutEventsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  groups: GroupCreateManyWithoutAuthorInput
}

input UserCreateWithoutGroupsInput {
  id: ID
  name: String!
  email: String!
  password: String!
  events: EventCreateManyWithoutAuthorInput
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
  password: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
  email: String
  password: String
  groups: GroupUpdateManyWithoutAuthorInput
  events: EventUpdateManyWithoutAuthorInput
}

input UserUpdateManyMutationInput {
  name: String
  email: String
  password: String
}

input UserUpdateOneRequiredWithoutEventsInput {
  create: UserCreateWithoutEventsInput
  update: UserUpdateWithoutEventsDataInput
  upsert: UserUpsertWithoutEventsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutGroupsInput {
  create: UserCreateWithoutGroupsInput
  update: UserUpdateWithoutGroupsDataInput
  upsert: UserUpsertWithoutGroupsInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutEventsDataInput {
  name: String
  email: String
  password: String
  groups: GroupUpdateManyWithoutAuthorInput
}

input UserUpdateWithoutGroupsDataInput {
  name: String
  email: String
  password: String
  events: EventUpdateManyWithoutAuthorInput
}

input UserUpsertWithoutEventsInput {
  update: UserUpdateWithoutEventsDataInput!
  create: UserCreateWithoutEventsInput!
}

input UserUpsertWithoutGroupsInput {
  update: UserUpdateWithoutGroupsDataInput!
  create: UserCreateWithoutGroupsInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  groups_every: GroupWhereInput
  groups_some: GroupWhereInput
  groups_none: GroupWhereInput
  events_every: EventWhereInput
  events_some: EventWhereInput
  events_none: EventWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  name: String
  email: String
}

enum Weekday {
  Mo
  Tu
  We
  Th
  Fr
  Sa
  Su
}
`
      }
    