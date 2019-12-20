const { prisma } = require("./generated/prisma-client");
const faker = require('faker');

// A `main` function so that we can use async/await
async function main() {
  const newUser = await prisma.createUser({
    name: 'Dmitriy Event Creator',
    email: 's@gmail.com',
    password: 'chupacabra',
    groups: {
      create: [
        {
        name: 'Effata',
        description: faker.hacker.phrase(),
        city: faker.address.city(),
        region: 'Minskaya',
        phone: '+375(25)940-95-91',
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        lattitude: 27.77,
        longitude: 54.33,
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
      }]
    },
    events: {
      create: [{
        name: faker.hacker.noun(),
        date: faker.date.past(),
        city: faker.address.city(), 
        description: faker.hacker.phrase(),
        agenda: faker.hacker.phrase(),
        contact: faker.hacker.phrase(),
      },{
        name: faker.hacker.noun(),
        date: faker.date.past(),
        city: faker.address.city(), 
        description: faker.hacker.phrase(),
        agenda: faker.hacker.phrase(),
        contact: faker.hacker.phrase(),
      },{
        name: faker.hacker.noun(),
        date: faker.date.past(),
        city: faker.address.city(), 
        description: faker.hacker.phrase(),
        agenda: faker.hacker.phrase(),
        contact: faker.hacker.phrase(),
      }]
    }
  })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  const allUsers = await prisma.users()
  console.log(allUsers)
}


main().catch(e => console.error(e))