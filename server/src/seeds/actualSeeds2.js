const { prisma } = require("../generated/prisma-client");

const createGroupsArray = () => {
  let constructedGroupsArray = [{
    name: "ВОЗРОЖДЕНИЕ (понедельник, среда)",
    birthday: new Date('2000-00-00T00:00:00'),
    website: "",
    description: "Свято-Симеоновский Собор, помещение молодежного клуба, 2 этаж",
    city: "Брест",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 207 84 71",
    email: "",
    address: "ул.К.Маркса 84",
    location: {
      create: {
        lattitude: 52.085642,
        longitude: 23.690122, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      }]
    }
  },{
    name: "ВОЗРОЖДЕНИЕ (вторник, пятница)",
    birthday: new Date('2000-00-00T00:00:00'),
    website: "",
    description: "Наркологический диспансер, актовый зал, 3 этаж",
    city: "Брест",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 207 84 71",
    email: "",
    address: "ул.Красногвардейская, 4",
    location: {
      create: {
        lattitude: 52.104513,
        longitude: 23.680249, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ВОЗРОЖДЕНИЕ (суббота)",
    birthday: new Date('2000-00-00T00:00:00'),
    website: "",
    description: "костёл (подвальное помещение)",
    city: "Брест",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 207 84 71",
    email: "",
    address: "ул. Ленина, 34",
    location: {
      create: {
        lattitude: 52.093422,
        longitude: 23.686268, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ВЫБОР",
    birthday: new Date('2011-08-10T00:00:00'),
    website: "",
    description: "4-й подъезд (подвальное помещение)",
    city: "Брест",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 739 30 27 / +375 44 474 74 63",
    email: "",
    address: "ул. Интернациональная, 61",
    location: {
      create: {
        lattitude: 52.084960,
        longitude: 23.700735, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },
   
  ]
  return constructedGroupsArray
}

// main seed function comes below
const constructedGroupsArray = createGroupsArray()
console.log(constructedGroupsArray)
console.log('s===============')

async function main() {
  const newUser = await prisma.createUser({
    name: 'elw23pinche',
    email: 'sew23@gmail.com',
    password: 'onwetwozero',
    groups: {
      create: constructedGroupsArray
    }
  })
}

main().catch(e => console.error(e))

