const { prisma } = require("../generated/prisma-client");

const createGroupsArray = () => {
  let constructedGroupsArray = [{
    name: "СПАДЧЫНА (НАСЛЕДИЕ)",
    birthday: new Date('2008-06-04T19:00:00'),
    website: "",
    description: "",
    city: "Minsk",
    region: "Minskaya",
    isActive: false,
    phone: "+375 29 152 97 64",
    email: "nasledieaa@mail.ru",
    address: "ул. Омельянюка 15, 2-й этаж",
    location: {
      create: {
        lattitude: 53.876096,
        longitude: 27.649775, 
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
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },]
    }
  },{
    name: "ДУХОВНЫЙ ЭВЕРЕСТ",
    birthday: new Date('2004-10-25T19:00:00'),
    website: "",
    description: "наркодиспансер",
    city: "Minsk",
    region: "Minskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. Алтайская 64, к.1",
    location: {
      create: {
        lattitude: 53.869867,
        longitude: 27.668327, 
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
      },]
    }
  },{
    name: "ВОЗРОЖДЕНИЕ",
    birthday: new Date('2006-09-01T19:00:00'),
    website: "http://www.aavozrojdenie.by/",
    description: "наркодиспансер",
    city: "Minsk",
    region: "Minskaya",
    isActive: true,
    phone: "+375 29 906 77 26 / + 375 33 378 90 60",
    email: "aa_vozrojdenie@mail.ru",
    address: "ул. Маяковского, 162, каб.1",
    location: {
      create: {
        lattitude: 53.869867,
        longitude: 27.668327, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      },{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      },{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      }, ]
    }
  },{
    name: "СПАСИТЕЛЬНЫЙ КРУГ",
    birthday: new Date('2010-06-05T19:00:00'),
    website: "",
    description: "СПЦ Ленинского р-на",
    city: "Minsk",
    region: "Minskaya",
    isActive: true,
    phone: "+ 375 44 797 43 37",
    email: "",
    address: "пр-т Партизанский 17а",
    location: {
      create: {
        lattitude: 53.884978,
        longitude: 27.591508, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, ]
    }
  },{
    name: "СЕРЕБРЯНКА",
    birthday: new Date('2013-06-24T19:00:00'),
    website: "",
    description: "помещение актового зала (общежитие МТЗ)",
    city: "Minsk",
    region: "Minskaya",
    isActive: true,
    phone: "+ 375 29 178 55 49",
    email: "",
    address: "ул. Малинина, д.28, корп.2",
    location: {
      create: {
        lattitude: 53.850648,
        longitude: 27.605581, 
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
      },{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },]
    }
  },{
    name: "ПОВОРОТ",
    birthday: new Date('2000-00-00T00:00:00'),
    website: "",
    description: "помещение костела",
    city: "Minsk",
    region: "Minskaya",
    isActive: false,
    phone: "+ 375 29 931 11 53 / + 375 29 247 65 25",
    email: "aa-povorot@yandex.ru",
    address: "ул. Плеханова, д.28а корп. 1, комната 3",
    location: {
      create: {
        lattitude: 53.866490,
        longitude: 27.615685, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },]
    }
  },{
    name: "ТОЧКА",
    birthday: new Date('2013-09-06T19:00:00'),
    website: "",
    description: "помещение костела",
    city: "Minsk",
    region: "Minskaya",
    isActive: true,
    phone: "+ 375 29 357 21 96 / + 375 29 884 59 51",
    email: "aatochka@yandex.ru",
    address: "ул. Долгобродская, 10/2",
    location: {
      create: {
        lattitude: 53.899580,
        longitude: 27.602066, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },]
    }
  }, {
    name: "УТРЕННЯЯ ЗВЕЗДА",
    birthday: new Date('1997-11-01T19:00:00'),
    website: "",
    description: "наркокабинет",
    city: "Minsk",
    region: "Minskaya",
    isActive: true,
    phone: "+ 375 33 658 70 72",
    email: "u_zvezda@tut.by",
    address: "пр-т Газеты «Звезда» 55",
    location: {
      create: {
        lattitude: 53.858574,
        longitude: 27.463261, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ЧИСТЫЙ ЛИСТ",
    birthday: new Date('2000-00-00T00:00:00'),
    website: "",
    description: "",
    city: "Minsk",
    region: "Minskaya",
    isActive: true,
    phone: "+ 375 29 710 95 09",
    email: "",
    address: "ул.Наполеона Орды, 47А",
    location: {
      create: {
        lattitude: 53.850072,
        longitude: 27.486692, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  }, {
      name: "SOBRIETY (ТРЕЗВОСТЬ)",
      birthday: new Date('2000-00-00T00:00:00'),
      website: "",
      description: "english-speaking group (СПЦ Московского района)",
      city: "Minsk",
      region: "Minskaya",
      isActive: false,
      phone: "+ 375 29 255 20 55",
      email: "",
      address: "ул. Розы Люксембург, д. 104, к. 20",
      location: {
        create: {
          lattitude: 53.892171,
          longitude: 27.521363, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T10:00:00'),
          type: 'Closed',
        }]
      }
    },{
      name: "АЭРОПОРТ",
      birthday: new Date('2008-05-17T19:00:00'),
      website: "",
      description: "",
      city: "Minsk",
      region: "Minskaya",
      isActive: true,
      phone: "+ 375 29 286 69 73",
      email: "",
      address: "ул.Пуховичская, 11, комната 10",
      location: {
        create: {
          lattitude: 53.848661,
          longitude: 27.546898, 
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
          weekday: "Th",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        }]
      }
    },{
      name: "СОКОЛ",
      birthday: new Date('2000-00-00T00:00:00'),
      website: "",
      description: "Свято-Никольская церковь",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+ 375 29 574 27 87",
      email: "",
      address: "пос. Сокол, ул. Барамзиной 20",
      location: {
        create: {
          lattitude: 53.877760,
          longitude: 27.902033, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        }]
      }
    },{
      name: "ВИКТОРИЯ",
      birthday: new Date('1999-03-13T18:00:00'),
      website: "", 
      description: "наркодиспансер",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+ 375 29 177 41 01 / + 375 29 627 85 74",
      email: "",
      address: "ул. Передовая, 11",
      location: {
        create: {
          lattitude: 53.899182,
          longitude: 27.620856, 
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
          weekday: "Tu",
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
        } ,{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        } ,{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Open',
        } ,{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Open',
        }]
      }
    },{
      name: "СПАСИТЕЛЬНАЯ ЧАША",
      birthday: new Date('2007-06-24T18:00:00'),
      website: "", 
      description: "православный приход",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+ 375 29 382 44 89",
      email: "spas_chasha@tut.by",
      address: "ул. Менделеева, 4",
      location: {
        create: {
          lattitude: 53.901881,
          longitude: 27.622437, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T18:30:00'),
          type: 'Closed',
        }, {
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T18:30:00'),
          type: 'Open',
        },]
      }
    },{
      name: "СТАРТ",
      birthday: new Date('2000-00-00T00:00:00'),
      website: "", 
      description: "общежитие МТЗ, п.6",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "",
      email: "",
      address: "ул. О.Кошевого, 30",
      location: {
        create: {
          lattitude: 53.884229,
          longitude: 27.602348, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        }]
      }
    },{
      name: "ОЧАГ",
      birthday: new Date('2015-05-20T18:00:00'),
      website: "", 
      description: "костел, цокольный этаж, комната 3",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "",
      email: "",
      address: "ул. Плеханова, 28",
      location: {
        create: {
          lattitude: 53.867847,
          longitude: 27.619889, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T17:00:00'),
          type: 'Open',
        }]
      }
    },{
      name: "НАДЕЖДА",
      birthday: new Date('1990-04-28T18:00:00'),
      website: "http://www.nadejda.nirstyle.com", 
      description: "наркодиспансер",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 29 664 37 81",
      email: "6643781@rambler.ru",
      address: "ул. Волгоградская, 63",
      location: {
        create: {
          lattitude: 53.937897,
          longitude: 27.608364, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Tu",
          time:  new Date('1995-12-17T17:30:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T17:30:00'),
          type: 'Closed',
        }]
      }
    },{
      name: "БЕСЕДА",
      birthday: new Date('2000-00-00T00:00:00'),
      website: "", 
      description: "вход со стороны ул. Машерова",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "",
      email: "",
      address: "ул. Машерова, 8 ",
      location: {
        create: {
          lattitude: 53.912866,
          longitude: 27.576040, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T10:00:00'),
          type: 'Closed',
        },]
      }
    },{
      name: "ДОМ",
      birthday: new Date('2000-00-00T00:00:00'),
      website: "", 
      description: "",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "",
      email: "aadom.bel@gmail.com",
      address: "???",
      location: {
        create: {
          lattitude: 53.909640,
          longitude: 27.564829, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },]
      }
    },{
      name: "ЭФФАТА («ОТКРОЙСЯ»)",
      birthday: new Date('2002-09-17T19:00:00'),
      website: "", 
      description: "вход со стороны ул. Кнорина",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 29 827 14 44",
      email: "effata.aa@mail.ru",
      address: "ул. Севастопольская 100, Церковь, 1 эт.",
      location: {
        create: {
          lattitude: 53.940653,
          longitude: 27.616714, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Tu",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },]
      }
    },{
      name: "СПАСЕНИЕ",
      birthday: new Date('2011-01-06T19:00:00'),
      website: "", 
      description: "«Храм иконы Божьей Матери Всех скорбящих радость», здание Воскресной школы, каб. 131",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 44 726 67 71",
      email: "spasenie_minsk@mail.ru",
      address: "ул. Притыцкого 65",
      location: {
        create: {
          lattitude: 53.906198,
          longitude: 27.471801, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Open',
        },]
      }
    },{
      name: "МЕЧТА",
      birthday: new Date('2008-04-24T19:00:00'),
      website: "", 
      description: "«вход справа за Костелом, по лестнице наверх",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 44 491 29 61",
      email: "spasenie_minsk@mail.ru",
      address: "Кальварийский проезд",
      location: {
        create: {
          lattitude: 53.909119,
          longitude: 27.504947, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Tu",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T20:00:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T13:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Open',
        },]
      }
    },{
      name: "НА ГОРЕ",
      birthday: new Date('2000-00-00T00:00:00'),
      website: "", 
      description: "«Костел Матери Божьей Будславской, за гипермаркетом «Материк» — комната в цокольном этаже административной части костела, вход с правой стороны костела",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 25 90 60 911",
      email: "minsknagore@gmail.com",
      address: "ул. Притыцкого, 107А",
      location: {
        create: {
          lattitude: 53.904387,
          longitude: 27.428602, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T18:30:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T20:30:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Tu",
          time:  new Date('1995-12-17T18:30:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Tu",
          time:  new Date('1995-12-17T20:30:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T18:30:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T20:30:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T18:30:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T20:30:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T18:30:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T20:30:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T14:00:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T14:00:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Open',
        },]
      }
    },{
      name: "ЕСТЬ РЕШЕНИЕ",
      birthday: new Date('2000-00-00T00:00:00'),
      website: "", 
      description: "наркодиспансер, 5-ое отделение, кабинет №2",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 44 572 41 62",
      email: "",
      address: "ул. Чигладзе, 22",
      location: {
        create: {
          lattitude: 53.926644,
          longitude: 27.490320, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },]
      }
    },{
      name: "НА ОЗЕРЕ",
      birthday: new Date('2008-08-16T19:00:00'),
      website: "", 
      description: "городской наркологический диспансер",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 29 735 41 56",
      email: "",
      address: "ул. Тарханова, 16",
      location: {
        create: {
          lattitude: 53.918476,
          longitude: 27.528234, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Tu",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T14:00:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Open',
        },]
      }
    },{
      name: "ВЕРХНИЙ ГОРОД",
      birthday: new Date('2009-12-18T19:00:00'),
      website: "", 
      description: "",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 33 611 12 58",
      email: "belgas@tut.by",
      address: "Площадь Свободы, 9",
      location: {
        create: {
          lattitude: 53.903206,
          longitude: 27.554650, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T10:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Tu",
          time:  new Date('1995-12-17T10:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T10:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T10:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T10:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T18:00:00'),
          type: 'Closed',
        }]
      }
    },{
      name: "ПЕРВЫЙ ШАГ",
      birthday: new Date('2012-06-17T19:00:00'),
      website: "", 
      description: "пос. Новинки, РНПЦ, отделение реабилитации №21",
      city: "Минск",
      region: "Minskaya",
      isActive: true,
      phone: "+375 29 623-55-09",
      email: "first_step2012@mail.ru",
      address: "Долгиновский тракт, д.152",
      location: {
        create: {
          lattitude: 53.954220,
          longitude: 27.541883, 
        },
      },
      meetings: {
        create: [{
          name: "Собрание",
          weekday: "Mo",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "We",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Th",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Open',
        },{
          name: "Собрание",
          weekday: "Fr",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Sa",
          time:  new Date('1995-12-17T19:00:00'),
          type: 'Closed',
        },{
          name: "Собрание",
          weekday: "Su",
          time:  new Date('1995-12-17T19:00:00'),
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
    name: 'elwpinche',
    email: 'sew@gmail.com',
    password: 'onwetwozero',
    groups: {
      create: constructedGroupsArray
    }
  })
}

main().catch(e => console.error(e))

