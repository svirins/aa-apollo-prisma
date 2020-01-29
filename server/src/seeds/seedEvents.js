const { prisma } = require("../generated/prisma-client");
const faker = require('faker');

// A `main` function so that we can use async/await
async function main() {
  const newUser = await prisma.createUser({
    name: '234345r45',
    email: 's342343455@gmail.com',
    password: '4523343',
    events: {
      create: [{
        name: faker.hacker.noun(),
        date: faker.date.past(),
        city: faker.address.city(), 
        description: faker.hacker.phrase(),
        agenda: faker.hacker.phrase(),
        contact: faker.hacker.phrase(),
        location: {
          create: {
            lattitude: 32,
            longitude: 11
          }
        } ,
        image: {
          create: {
            publicId: '22',
            cloudinaryUrl: '2020-01-29T14:16:36.826Z', 
          },
        } 
      }
    ]
    }
  })
  console.log(`Created new user: ${newUser.name} (ID: ${newUser.id})`)

  const allUsers = await prisma.users()
  console.log(allUsers)
}


main().catch(e => console.error(e))