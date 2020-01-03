const { prisma } = require("./generated/prisma-client");
const faker = require('faker');

// A `main` function so that we can use async/await
async function main() {
  const newUser = await prisma.createUser({
    name: 'Dmitriy Sq',
    email: 'dws@gmail.com',
    password: 'chwnupacabra',
    groups: {   
      create: [
        {
          name: 'Na ozere',
          description: faker.hacker.phrase(),
          city: faker.address.city(),
          region: 'Minskaya',
          isActive: true,
          phone: '+375(25)940-95-91',
          email: faker.internet.email(),
          address: faker.address.streetAddress(),
          location: {
            create: {
                lattitude: 53.89,
                longitude: 27.56,
            },
          },
          meetings: {
            create: [{
              name: faker.hacker.noun(),
              weekday: 'Mo',
              time:  faker.date.past(),
              type: 'Closed',
            },{
              name: faker.hacker.noun(),
              weekday: 'Tu',
              time:  faker.date.past(),
              type: 'Closed',
            },],
          },
      },{
        name: 'Na gore',
        description: faker.hacker.phrase(),
        city: faker.address.city(),
        region: 'Minskaya',
        isActive: false,
        phone: '+375(25)940-95-99',
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        location: {
          create: {
            lattitude: 53.829,
            longitude: 27.256,
          },
        },
        meetings: {
          create: [{
            name: faker.hacker.noun(),
            weekday: 'Mo',
            time: faker.date.past(),
            type: 'Closed',
          },{
            name: faker.hacker.noun(),
            weekday: 'Tu',
            time: faker.date.past(),
            type: 'Closed',
          },],
        },
      },{
        name: 'Tochka',
        description: faker.hacker.phrase(),
        city: faker.address.city(),
        region: 'Minskaya',
        isActive: true,
        phone: '+375(25)940-95-91',
        email: faker.internet.email(),
        address: faker.address.streetAddress(),       
        location: {
          create: {
            lattitude: 53.989,
            longitude: 27.556,
          },
        },
        meetings: {
          create: [{
            name: faker.hacker.noun(),
            weekday: 'Mo',
            time:  faker.date.past(),
            type: 'Closed',
          },{
            name: faker.hacker.noun(),
            weekday: 'Tu',
            time: faker.date.past(),
            type: 'Closed',
          },],
        },
      },{
        name: 'Na ozere',
        description: faker.hacker.phrase(),
        city: faker.address.city(),
        region: 'Minskaya',
        isActive: true,
        phone: '+375(25)940-95-91',
        email: faker.internet.email(),
        address: faker.address.streetAddress(),
        location: {
          create: {
            lattitude: 53.589,
            longitude: 27.656,
          },
        },
        meetings: {
          create: [{
            name: faker.hacker.noun(),
            weekday: 'Mo',
            time:  faker.date.past(),
            type: 'Closed',
          },{
            name: faker.hacker.noun(),
            weekday: 'Tu',
            time:  faker.date.past(),
            type: 'Closed',
          },],
        },
    },{
      name: 'Na gore',
      description: faker.hacker.phrase(),
      city: faker.address.city(),
      region: 'Minskaya',
      isActive: true,
      phone: '+375(25)940-95-99',
      email: faker.internet.email(),
      address: faker.address.streetAddress(),
      location: {
        create: {
          lattitude: 53.989,
          longitude: 27.756,
        },
      },
      meetings: {
        create: [{
          name: faker.hacker.noun(),
          weekday: 'Mo',
          time:  faker.date.past(),
          type: 'Closed',
        },{
          name: faker.hacker.noun(),
          weekday: 'Tu',
          time:  faker.date.past(),
          type: 'Closed',
        },],
      },
    },{
      name: 'Tochka',
      description: faker.hacker.phrase(),
      city: faker.address.city(),
      region: 'Minskaya',
      isActive: true,
      phone: '+375(25)940-95-91',
      email: faker.internet.email(),
      address: faker.address.streetAddress(),       
      location: {
        create: {
          lattitude: 53.389,
          longitude: 27.456,
        },
      },
      meetings: {
        create: [{
          name: faker.hacker.noun(),
          weekday: 'Mo',
          time: faker.date.past(),
          type: 'Closed',
        },{
          name: faker.hacker.noun(),
          weekday: 'Tu',
          time:  faker.date.past(),
          type: 'Closed',
        },],
      },
    }],
     }, 
    })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  const allUsers = await prisma.users()
  console.log(allUsers)
}







main().catch(e => console.error(e))