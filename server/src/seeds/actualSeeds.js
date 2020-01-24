const { prisma } = require("../generated/prisma-client");
const faker = require('faker');
const createIterableData = require("./utils")

const types = ["Open","Closed"]
const weekdays = ["Mo","Tu","We","Th","Fr","Sa","Su"]

function createMeetingsArray()  {
  let meetings = []
  let twoToSevenRandom = Math.ceil(Math.random()*5)+2
  for (let iteration = 0; iteration < twoToSevenRandom; iteration++ ){
    meetings.push({
      name: faker.hacker.noun(),
      weekday: weekdays[Math.ceil(Math.random()*6)],
      time:  faker.date.past(),
      type: 'Closed',
    })
  }
  return meetings
}

const createGroupsArray = () => {
  let constructedGroupsArray = []
  for (let iteration = 0; iteration < 85; iteration++ ){
    let {region, city, lattitude, longitude} = createIterableData(iteration)
    meetings = createMeetingsArray()
    constructedGroupsArray.push({
      name: "",
      description: "",
      city: "",
      region: region,
      isActive: true,
      phone: "",
      email: "",
      address: "",
      location: {
        create: {
          lattitude: lattitude,
          longitude: longitude, 
        },
      },
      meetings: {
        create: meetings
      }
    })
  }
  return constructedGroupsArray
}

// main seed function comes below
const constructedGroupsArray = createGroupsArray()
async function main() {
  const newUser = await prisma.createUser({
    name: 'dsvr',
    email: 'e@mail.me',
    password: 'onetwozero',
    groups: {
      create: constructedGroupsArray
    }
  })
}

main().catch(e => console.error(e))

