const { prisma } = require('./generated/prisma-client')
const faker = require('faker');

// A `main` function so that we can use async/await
async function main() {
  const newUser = await prisma.createUser({
    name: 'Dmitriy S',
    email: 'svirins@gmail.com',
    password: 'chupacabra',
    groups: {
      create: [
        {
          name: 'Na ozere',
          description: faker.hacker.phrase(),
          city: faker.address.city(),
          region: 'Minskaya',
          phone: '+375(25)940-95-91',
          email: faker.internet.email(),
          address: faker.address.streetAddress(),
          geodata: {
            create: {
              latitude: 27.77,
              longitude: 54.33,
            },
          },
          meetings: {
            create: [{
              name: faker.hacker.noun(),
              weekday: 'Mo',
              time: '19:00',
              type: 'Closed',
            },{
              name: faker.hacker.noun(),
              weekday: 'Tu',
              time: '19:00',
              type: 'Closed',
            },],
          },
      },{
        name: 'Na gore',
        description: faker.hacker.phrase(),
        city: faker.address.city(),
        region: 'Minskaya',
        phone: '+375(25)940-95-99',
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        geodata: {
          create: {
            latitude: 27.77,
            longitude: 54.33,
          },
        },
        meetings: {
          create: [{
            name: faker.hacker.noun(),
            weekday: 'Mo',
            time: '19:00',
            type: 'Closed',
          },{
            name: faker.hacker.noun(),
            weekday: 'Tu',
            time: '19:00',
            type: 'Closed',
          },],
        },
      },{
        name: 'Tochka',
        description: faker.hacker.phrase(),
        city: faker.address.city(),
        region: 'Minskaya',
        phone: '+375(25)940-95-91',
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        geodata: {
          create: {
            latitude: 27.77,
            longitude: 54.33,
          },
        },
        meetings: {
          create: [{
            name: faker.hacker.noun(),
            weekday: 'Mo',
            time: '19:00',
            type: 'Closed',
          },{
            name: faker.hacker.noun(),
            weekday: 'Tu',
            time: '19:00',
            type: 'Closed',
          },],
        },
      },],
     }, 
    })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  const allUsers = await prisma.users()
  console.log(allUsers)
}







main().catch(e => console.error(e))