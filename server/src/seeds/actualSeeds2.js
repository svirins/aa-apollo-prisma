const { prisma } = require("../generated/prisma-client");

const createGroupsArray = () => {
  let constructedGroupsArray = [{
    name: "ВОЗРОЖДЕНИЕ (понедельник, среда)",
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
  },{
    name: "ИСКРА",
    website: "",
    description: "Наркологический диспансер, актовый зал, 3 этаж",
    city: "Брест",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 33 344 65 65",
    email: "",
    address: "ул. Брестских дивизий, 13/1",
    location: {
      create: {
        lattitude: 52.103162,
        longitude: 23.675052, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "РАССВЕТ",
    birthday: new Date('2014-07-15T00:00:00'),
    website: "",
    description: "м-н Вулька, помещение воскресной школы Свято-Христо-Рождественской церкви",
    city: "Брест",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 779 91 80",
    email: "",
    address: "ул. Краснознаменная 73",
    location: {
      create: {
        lattitude: 52.066572,
        longitude: 23.714906, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T16:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ПРОБУЖДЕНИЕ",
    birthday: new Date('1997-03-19T00:00:00'),
    website: "",
    description: "воскресная школа при Храме святых Жен-Мироносиц",
    city: "Барановичи",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 224 70 33 / +375 29 390 07 28",
    email: "maiden72@mail.ru",
    address: "ул. Шевченко, 6",
    location: {
      create: {
        lattitude: 53.143769,
        longitude: 26.005434, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ИСТОК",
    website: "",
    description: "костел",
    city: "Барановичи",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 224 70 33",
    email: "",
    address: "ул. Пирогова, 5",
    location: {
      create: {
        lattitude: 53.143769,
        longitude: 26.005434, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ШАНС",
    birthday: new Date('2012-11-25T00:00:00'),
    website: "",
    description: "ГУ «Березовский территориальный центр социального обслуживания населения»",
    city: "Береза",
    region: "Brestskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. 17 сентября, 35",
    location: {
      create: {
        lattitude: 52.530241,
        longitude: 24.979901, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "КОСТЕЛ",
    website: "",
    description: "Костёл Святой Троицы",
    city: "Береза",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 733 88 69",
    email: "",
    address: "ул. Ленина",
    location: {
      create: {
        lattitude: 52.541829,
        longitude: 24.995045, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }]
    }
  }
   
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

