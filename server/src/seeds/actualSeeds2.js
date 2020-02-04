const { prisma } = require("../generated/prisma-client");

const createGroupsArray = () => {
  let constructedGroupsArray = [{
    name: "ВОЗРОЖДЕНИЕ (пн, ср)",
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
    name: "ВОЗРОЖДЕНИЕ (вт, пт)",
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
    name: "ВОЗРОЖДЕНИЕ (сб)",
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
  }, {
    name: "ТОЧКА ВОЗВРАТА",
    website: "",
    description: "здание воскресной школы",
    city: "Ганцевичи",
    region: "Brestskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. Фрунзе, 1",
    location: {
      create: {
        lattitude: 52.756786,
        longitude: 26.420950, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ВОЗРОЖДЕНИЕ (чт)",
    birthday: new Date('2013-05-09T00:00:00'),
    website: "",
    description: "Костел Успения Пресвятой Девы Марии",
    city: "Кобрин",
    region: "Brestskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. Первомайская, 80",
    location: {
      create: {
        lattitude: 52.212643,
        longitude: 24.371777, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T19:30:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ВОЗРОЖДЕНИЕ (вс)",
    birthday: new Date('2013-05-09T00:00:00'),
    website: "",
    description: "Свято-Александро-Невский Собор",
    city: "Кобрин",
    region: "Brestskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. Ленина, 18",
    location: {
      create: {
        lattitude: 52.214207,
        longitude: 24.358457, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T19:30:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ЖИЗНЬ",
    website: "",
    description: "Храм в честь иконы Божьей Матери «Взыскание погибших»",
    city: "Лунинец",
    region: "Brestskaya",
    isActive: true,
    phone: "",
    email: "aa.zhizn@mail.ru",
    address: "ул. Чапаева, 77/1",
    location: {
      create: {
        lattitude: 52.254746,
        longitude: 26.824295, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T16:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "МАЯК",
    website: "",
    description: "приходской дом костела",
    city: "Ляховичи",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 29 887 65 09 / +375 29 798 31 29",
    email: "aalyahovichi@mail.ru",
    address: "ул. Советская, 21",
    location: {
      create: {
        lattitude: 53.036897,
        longitude: 26.262126, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Open',
      }]
    }
  }, {
    name: "ПУТЬ (ср, пт)",
    website: "",
    description: "наркология, акт. зал",
    city: "Пинск",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 44 465 39 60",
    email: "",
    address: "ул.Рокоссовского, 8",
    location: {
      create: {
        lattitude: 52.133463,
        longitude: 26.114104, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ПУТЬ (вс)",
    website: "",
    description: "здание школы при костеле",
    city: "Пинск",
    region: "Brestskaya",
    isActive: true,
    phone: "+375 44 465 39 60",
    email: "",
    address: "ул. К. Свентека",
    location: {
      create: {
        lattitude: 52.112896,
        longitude: 26.108101, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T13:00:00'),
        type: 'Open',
      }]
    }
  }, {
    name: "ПЕРВЫЙ ШАГ (пн)",
    birthday: new Date('2005-04-05T00:00:00'),
    website: "",
    description: "",
    city: "Витебск",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 29 211 25 00",
    email: "aa.vitebsk@mail.ru",
    address: "пр-т Московский, д. 64",
    location: {
      create: {
        lattitude: 55.179484,
        longitude: 30.224450, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T17:30:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ПЕРВЫЙ ШАГ (ср)",
    birthday: new Date('2005-04-05T00:00:00'),
    website: "",
    description: "",
    city: "Витебск",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 29 211 25 00",
    email: "aa.vitebsk@mail.ru",
    address: "ул. Коммунистическая, д. 6",
    location: {
      create: {
        lattitude: 55.200405,
        longitude: 30.209155, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ВОЗРОЖДЕНИЕ",
    birthday: new Date('2005-12-13T00:00:00'),
    website: "",
    description: "костел Св. Антония",
    city: "Витебск",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 33 696 45 88",
    email: "aa.vitebsk@mail.ru",
    address: "ул. Гагарина, 46а",
    location: {
      create: {
        lattitude: 55.210382,
        longitude: 30.223625, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T15:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ВОСКРЕСЕНЬЕ",
    birthday: new Date('2013-05-19T00:00:00'),
    website: "",
    description: "женское отделение ЛТП № 4, предварительно созваниваться с ответственным",
    city: "Витебск",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 29 291 97 97",
    email: "aa.vitebsk@mail.ru",
    address: "ул. Гагарина, 48",
    location: {
      create: {
        lattitude: 55.210382,
        longitude: 30.223625, 
      },
    },
    meetings: {}
  },{
    name: "ИСТИНА",
    birthday:  new Date('2005-11-13T10:00:00'),
    website: "",
    description: "",
    city: "Браслав",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 33 359 97 02",
    email: "istina.braslav@yandex.by",
    address: "ул. Советская, 3",
    location: {
      create: {
        lattitude: 55.633740,
        longitude: 27.050164, 
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
  }, {
    name: "НОВАЯ ЖИЗНЬ",
    birthday:  new Date('2010-08-05T10:00:00'),
    website: "",
    description: "костел",
    city: "Верхнедвинск",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 29 817 49 89",
    email: "",
    address: "ул. Советская, 45",
    location: {
      create: {
        lattitude: 55.782509,
        longitude: 27.934363, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T11:30:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ПЕРЕКРЕСТОК",
    website: "",
    description: "костел",
    city: "Витьба",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 33 696 45 88",
    email: "",
    address: "ул. Советская, 45",
    location: {
      create: {
        lattitude: 55.782509,
        longitude: 27.934363, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ТОЧКА ОТСЧЕТА",
    birthday:  new Date('2004-04-24T10:00:00'),
    website: "",
    description: "воскресная школа при костеле",
    city: "Глубокое",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 29 519 03 21",
    email: "",
    address: "ул. Советская, 45",
    location: {
      create: {
        lattitude: 55.141040,
        longitude: 27.693634, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T14:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ДОВЕРИЕ",
    birthday:  new Date('2010-09-12T10:00:00'),
    website: "",
    description: "костел",
    city: "д. Удело",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 029 299 13 48",
    email: "",
    address: "ул. Набережная, 2",
    location: {
      create: {
        lattitude: 55.211181,
        longitude: 27.559439, 
      },
    },
    meetings: {
      create: [{
        name: "в зимнее время — 17-00",
        weekday: "Su",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ЛОТОС",
    birthday:  new Date('2010-09-12T10:00:00'),
    website: "",
    description: "здание костела",
    city: "Новополоцк",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 029 284 49 05 / +375 29 931 99 24",
    email: "aanovopolotsk@yandex.ru",
    address: "ул. Я.Коласа, 52",
    location: {
      create: {
        lattitude: 55.524405,
        longitude: 28.682653, 
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
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T15:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ВЫХОД ЕСТЬ",
    birthday:  new Date('2007-10-10T10:00:00'),
    website: "",
    description: "костел",
    city: "Орша",
    region: "Vitebskaya",
    isActive: true,
    phone: "+375 029 763 18 50 / +375 29 897 93 03",
    email: "alexeev1977@mail.ru",
    address: "ул. Советская, 6",
    location: {
      create: {
        lattitude: 54.505588,
        longitude: 30.416165, 
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
    name: "НАДЕЖДА",
    website: "",
    description: "костел, 2-ой этаж",
    city: "Полоцк",
    region: "Vitebskaya",
    isActive: true,
    phone: "",
    email: "aapolotsk@mail.ru",
    address: "ул. Дзержинского, 54А",
    location: {
      create: {
        lattitude: 55.478708,
        longitude: 28.765806, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T16:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "РУБИКОН",
    birthday:  new Date('2012-06-18T10:00:00'),
    website: "",
    description: "конференц-зал",
    city: "Гомель",
    region: "Gomelskaya",
    isActive: true,
    phone: "+375 44 464 61 00 / +375 29 230 90 40",
    email: "aa_rubikon@mail.ru",
    address: "ул. Юбилейная, 8А",
    location: {
      create: {
        lattitude: 52.457896,
        longitude: 31.002961, 
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
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ГАРАНТ",
    website: "",
    description: "офис «Матери против наркотиков» (вход с обратной стороны)",
    city: "Жлобин",
    region: "Gomelskaya",
    isActive: true,
    phone: "+375 44 190 01 17",
    email: "",
    address: "Микрорайон 16, д.47",
    location: {
      create: {
        lattitude: 52.903708,
        longitude: 30.042538, 
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
      }, {
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ПУТЬ",
    website: "",
    description: "территориальный центр соцобслуживания населения",
    city: "Калинковичи",
    region: "Gomelskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул.Куйбышева, 3",
    location: {
      create: {
        lattitude: 52.120948,
        longitude: 29.335635, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T11:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ГОРИЗОНТ",
    birthday:  new Date('1998-09-26T10:00:00'),
    website: "",
    description: "Побригитский костёл, помещение столовой «Каритас»",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 867 97 42 / +375 29 583 69 51",
    email: "375295836951@yandex.ru",
    address: "ул. К.Маркса, 27",
    location: {
      create: {
        lattitude: 53.677206,
        longitude: 23.836354, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "3-е воскр. — открытое",
        weekday: "Su",
        time:  new Date('1995-12-17T17:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "БЛАГОВЕСТ",
    birthday:  new Date('1999-12-17T10:00:00'),
    website: "",
    description: "помещение воскресной школы, 2 этаж, класс 7",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 287 38 00 / +375 29 583 69 51",
    email: "375295836951@yandex.ru",
    address: "ул. Академическая, 2",
    location: {
      create: {
        lattitude: 53.686559,
        longitude: 23.840299, 
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
        weekday: "Sa",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      }]
    }
  }, {
    name: "ЗДЕСЬ И СЕЙЧАС",
    birthday:  new Date('2004-10-23T10:00:00'),
    website: "",
    description: "Католический катехический дом",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 267 14 51 / +375 29 583 69 51",
    email: "375295836951@yandex.ru",
    address: "ул. Сухомбаева, 26",
    location: {
      create: {
        lattitude: 53.694452,
        longitude: 23.813757, 
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
      },  {
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Open',
      }]
    }
  }, {
    name: "ПРОМЕТЕЙ",
    birthday:  new Date('2004-11-17T10:00:00'),
    website: "",
    description: "костел",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 312 18 79 / +375 29 583 69 51",
    email: "375295836951@yandex.ru",
    address: "ул. Кабяка 14",
    location: {
      create: {
        lattitude: 53.645680,
        longitude: 23.854505, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Open',
      }]
    }
  }, {
    name: "ПЕРВЫЙ ШАГ",
    birthday:  new Date('2002-02-18T10:00:00'),
    website: "",
    description: "областной наркодиспансер, 6 этаж. отделение реабилитации",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 33 372 08 98 / +375 29 583 69 51",
    email: "375295836951@yandex.ru",
    address: "пр. Космонавтов, 60/6",
    location: {
      create: {
        lattitude: 53.674594,
        longitude: 23.864452, 
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
        weekday: "Fr",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Open',
      }]
    }
  },  {
    name: "У КАМИНА",
    birthday:  new Date('2006-02-06T10:00:00'),
    website: "",
    description: "костел",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 33 620 90 58 / +375 29 583 69 51",
    email: "375295836951@yandex.ru",
    address: "м-н Девятовка, ул. Лиможа",
    location: {
      create: {
        lattitude: 53.707785,
        longitude: 23.850743, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T20:00:00'),
        type: 'Closed',
      }, {
        name: "открытое собрание — 4-й четверг",
        weekday: "Su",
        time:  new Date('1995-12-17T10:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "КРЕДО",
    birthday:  new Date('2013-02-16T10:00:00'),
    website: "",
    description: "помещение мед. учреждения",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 789 61 01 / +375 29 583 69 51",
    email: "375295836951@yandex.ru",
    address: "ул.Островского, 17",
    location: {
      create: {
        lattitude: 53.690441,
        longitude: 23.833692, 
      },
    },
    meetings: {
      create: [{
        name: "открытое собрание — 1-й вторник",
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
    name: "ИСТОЧНИК",
    website: "",
    description: "приход Костела",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 941 85 55 / +375 29 583 69 51",
    email: "istochnikgrodno@yandex.ru",
    address: "пос. Южный, ул. Центральная, 26",
    location: {
      create: {
        lattitude: 53.624985,
        longitude: 23.853899, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Open',
      }]
    }
  },  {
    name: "ЛУЧ СВЕТА",
    website: "",
    description: "ИУОТ №25",
    city: "Гродно",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 941 85 55 / +375 29 583 69 51",
    email: "istochnikgrodno@yandex.ru",
    address: "ул. Ленина, 12",
    location: {
      create: {
        lattitude: 53.679783,
        longitude: 23.840581, 
      },
    },
    meetings: {
      create: [ {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ПИРАМИДА",
    birthday:  new Date('2003-11-20T10:00:00'),
    website: "",
    description: "",
    city: "Волковыск",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 582 86 75",
    email: "aavolkovysk@tut.by",
    address: "ул. К. Маркса 21",
    location: {
      create: {
        lattitude: 53.159344,
        longitude: 24.471007, 
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
        weekday: "Th",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ПОИСК",
    birthday:  new Date('2017-03-26T10:00:00'),
    website: "",
    description: "конференц-зал Волковысской ЦРБ",
    city: "Волковыск",
    region: "Grodnenskaya",
    isActive: true,
    phone: "",
    email: "aavolkovysk@tut.by",
    address: "ул. Социалистическая, 64",
    location: {
      create: {
        lattitude: 53.160972,
        longitude: 24.449534, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ФЕНИКС",
    birthday:  new Date('2006-06-10T10:00:00'),
    website: "",
    description: "костел",
    city: "д. Шиловичи",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 384 63 56",
    email: "",
    address: "ул. Советская, 4",
    location: {
      create: {
        lattitude: 53.168782,
        longitude: 24.243662, 
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
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
    },{
    name: "ДЕНЬ РОЖДЕНИЯ",
    birthday:  new Date('1996-04-26T10:00:00'),
    website: "",
    description: "костельный дом",
    city: "Дятлово",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 969 67 90",
    email: "",
    address: "ул Ленина, 13",
    location: {
      create: {
        lattitude: 53.464869,
        longitude: 25.404738, 
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
    name: "АДАНАЙ",
    birthday:  new Date('2001-12-27T10:00:00'),
    website: "",
    description: "",
    city: "д. Лаздуны",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 25 780 61 35",
    email: "",
    address: "",
    location: {
      create: {
        lattitude: 53.966233,
        longitude: 25.978790, 
      },
    },
    meetings: {}
  }, {
    name: "ДОБРЫЙ ВЕЧЕР",
    birthday:  new Date('2008-03-26T10:00:00'),
    website: "",
    description: "",
    city: "Лида",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 336 06 34 / +375 29 929 14 14",
    email: "aalidagrup@mail.ru",
    address: "ул. Советская, 22-17",
    location: {
      create: {
        lattitude: 53.894353,
        longitude: 25.304302, 
      },
    },
    meetings: {
      create: [{
        name: "последняя среда месяца — открытое",
        weekday: "We",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "КЛЮЧ",
    birthday:  new Date('2018-04-20T10:00:00'),
    website: "",
    description: "",
    city: "Лида",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 44 471 80 28 / +375 29 929 14 14",
    email: "aalidagrup@mail.ru",
    address: "",
    location: {
      create: {
        lattitude: 53.894902,
        longitude: 25.302912, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "СЛОБОДА",
    birthday:  new Date('2005-01-29T10:00:00'),
    website: "",
    description: "",
    city: "Лида",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 33 624 48 35 / +375 29 929 14 14",
    email: "aalidagrup@mail.ru",
    address: "",
    location: {
      create: {
        lattitude: 53.893520,
        longitude: 25.296904, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ВЫБОР",
    birthday:  new Date('2001-01-12T10:00:00'),
    website: "",
    description: "костёл Святой Семьи приход",
    city: "Лида",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 266 63 31 / +375 29 929 14 14",
    email: "aalidagrup@mail.ru",
    address: "ул. Гастелло, 22",
    location: {
      create: {
        lattitude: 53.899574,
        longitude: 25.256585, 
      },
    },
    meetings: {
      create: [{
        name: "1-ый понедельник — открытое",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:15:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ВОСХОЖДЕНИЕ",
    birthday:  new Date('2010-10-01T10:00:00'),
    website: "",
    description: "психоневрологическая больница «Островля», 5-ое отделение, вход с улицы",
    city: "Лида",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 309 73 55 / +375 29 929 14 14",
    email: "aalidagrup@mail.ru",
    address: "д. Островля",
    location: {
      create: {
        lattitude: 53.870662,
        longitude: 25.232991, 
      },
    },
    meetings: {
      create: [{
        name: "1-ый понедельник — открытое",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Open',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Speaker',
      }]
    }
  }, {
    name: "ВЫХОД ЕСТЬ",
    website: "",
    description: "Лидский СПЦ",
    city: "Лида",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 912 46 03 / +375 29 281 65 41",
    email: "aalidagrup@mail.ru",
    address: "ул. Транспортная, 4",
    location: {
      create: {
        lattitude: 53.870148,
        longitude: 25.316196, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T12:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "МОСТ НАДЕЖДЫ",
    website: "",
    description: "церковь",
    city: "Мосты",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 782 48 41 / +375 29 580 75 63",
    email: "",
    address: "ул. 30 лет ВЛКСМ, 152",
    location: {
      create: {
        lattitude: 53.423350,
        longitude: 24.538377, 
      },
    },
    meetings: {
      create: [{
        name: "1-ый понедельник — открытое",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "МОСТ НАДЕЖДЫ",
    birthday:  new Date('2013-10-13T10:00:00'),
    website: "",
    description: "",
    city: "Новогрудок",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 25 930 21 31",
    email: "",
    address: "ул 1 Мая, 26",
    location: {
      create: {
        lattitude: 53.601303,
        longitude: 25.830101, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ТВОЙ ШАНС",
    birthday:  new Date('2013-10-13T10:00:00'),
    website: "",
    description: "костел",
    city: "Островец",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 33 322 72 32 / +375 29 368 50 27",
    email: "",
    address: "ул. Октябрьская, 6",
    location: {
      create: {
        lattitude: 54.614079,
        longitude: 25.958941, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ТВОЙ ШАНС",
    birthday:  new Date('2012-11-25T10:00:00'),
    website: "",
    description: "костел, учебный класс",
    city: "Ошмяны",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 381 19 89",
    email: "promyalda@mail.ru",
    address: "ул. Гольшанская, 1",
    location: {
      create: {
        lattitude: 54.423370,
        longitude: 25.935609, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "СИЛА ВЕРЫ",
    birthday:  new Date('2016-11-29T10:00:00'),
    website: "",
    description: "",
    city: "Свислочь",
    region: "Grodnenskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. Гагарина, 14/1",
    location: {
      create: {
        lattitude: 54.029665,
        longitude: 24.088155, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T12:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "МОНОЛИТ",
    birthday:  new Date('1998-05-15T10:00:00'),
    website: "",
    description: "за костелом (в центре, около универмага)",
    city: "Слоним",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 33 312 67 85",
    email: "",
    address: "ул. Первомайская, 12",
    location: {
      create: {
        lattitude: 53.093729,
        longitude: 25.319215, 
      },
    },
    meetings: {
      create: [{
        name: "в праздничные дни 15-00",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },{
        name: "в праздничные дни 15-00",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T15:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "12 СТУПЕНЕЙ",
    website: "",
    description: "церковь св. Афанасия Брестского (подвальное помещение)",
    city: "Слоним",
    region: "Grodnenskaya",
    isActive: true,
    phone: "",
    email: "belyak1982@mail.ru",
    address: "ул. Войкова, 21",
    location: {
      create: {
        lattitude: 53.077912,
        longitude: 25.392702, 
      },
    },
    meetings: {
      create: [{
        name: "в рабочие субботы дни 18-00",
        weekday: "Sa",
        time:  new Date('1995-12-17T15:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "КРИНИЦА",
    website: "",
    description: "Жировический Свято-Успенский монастырь",
    city: "а.г. Жировичи",
    region: "Grodnenskaya",
    isActive: true,
    phone: "",
    email: "aakrinitsa@mail.ru",
    address: "ул. Соборная, 57а",
    location: {
      create: {
        lattitude: 53.014756,
        longitude: 25.344258, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
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
    description: "Жировический Свято-Успенский монастырь",
    city: "д.Раховичи",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 609 65 18",
    email: "",
    address: "ул. Центральная, 11",
    location: {
      create: {
        lattitude: 52.984162,
        longitude: 25.195482, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T17:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T17:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ОЗАРЕНИЕ",
    birthday:  new Date('2004-06-23T10:00:00'),
    website: "",
    description: "Молодежный центр, костел",
    city: "Сморгонь",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 33 653 02 04",
    email: "vip.shmatok@mail.ru",
    address: "ул. П.Балыша, 2",
    location: {
      create: {
        lattitude: 54.480686,
        longitude: 26.402708, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T16:30:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ЕДИНСТВО",
    birthday:  new Date('2013-07-07T10:00:00'),
    website: "",
    description: "Молодежный центр, костел",
    city: "Сморгонь",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 580 61 05",
    email: "",
    address: "ул. П.Балыша, 2",
    location: {
      create: {
        lattitude: 54.480686,
        longitude: 26.402708, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T16:30:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "НАШ ПУТЬ",
    birthday:  new Date('2015-09-10T10:00:00'),
    website: "",
    description: "Помещение общественного пункта охраны порядка",
    city: "Сморгонь",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 29 930 19 45",
    email: "",
    address: "ул. Синицкого, 4",
    location: {
      create: {
        lattitude: 54.479057,
        longitude: 26.416452, 
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
        weekday: "Su",
        time:  new Date('1995-12-17T17:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ВЗЛЁТ",
    birthday:  new Date('1998-09-05T10:00:00'),
    website: "",
    description: "костёл (малое здание)",
    city: "Щучин",
    region: "Grodnenskaya",
    isActive: true,
    phone: "+375 33 623 27 87",
    email: "",
    address: "ул. Советская, 1",
    location: {
      create: {
        lattitude: 53.606497,
        longitude: 26.740703, 
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
        weekday: "We",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Open',
      }]
    }
  },{
    name: "ШАГ ВПЕРЕД",
    birthday:  new Date('2013-02-01T10:00:00'),
    website: "http://aashagvpered.by2.by",
    description: "(психоневрологический диспансер), 4 этаж, 422 комната",
    city: "Могилев",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 44 484 78 12 / +375 29 33 363 95 23",
    email: "",
    address: "Витебский пр-т, 70",
    location: {
      create: {
        lattitude: 53.884331,
        longitude: 30.415703, 
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
      }]
    }
  },{
    name: "12 ШАГОВ",
    birthday:  new Date('2010-03-19T10:00:00'),
    website: "http://aa-mogilev.tilda.ws/",
    description: "костел",
    city: "Могилев",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 29 981 25 37 / +375 29 33 363 95 23",
    email: "",
    address: "ул. Комсомольская, 4",
    location: {
      create: {
        lattitude: 53.898674,
        longitude: 30.334119, 
      },
    },
    meetings: {
      create: [{
        name: "кроме 1-го понедельника месяца",
        weekday: "Mo",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "1-ая среда месяца — открытое",
        weekday: "We",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ШАГИ",
    birthday:  new Date('1998-01-25T10:00:00'),
    website: "http://aa-mogilev.tilda.ws/",
    description: "строящийся костел",
    city: "Могилев",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 29 849 79 40",
    email: "knext52@rambler.ru",
    address: "перекресток пр. Шмидта и ул. Островского",
    location: {
      create: {
        lattitude: 53.868848,
        longitude: 30.323580, 
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
        name: "1-е воскр. – открытое",
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "АРКА",
    birthday:  new Date('2015-06-06T10:00:00'),
    website: "http://aa-mogilev.tilda.ws/",
    description: "помещение Могилёвской епархии",
    city: "Могилев",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 29 952 71 69 / + 375 29 539 71 69",
    email: "",
    address: "ул. Первомайская, 75",
    location: {
      create: {
        lattitude: 53.911188,
        longitude: 30.341692, 
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
        weekday: "Su",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "НОВОЕ РОЖДЕНИЕ (вт, чт)",
    birthday:  new Date('2011-11-14T10:00:00'),
    website: "",
    description: "ТЦСОН Ленинского р-на",
    city: "Бобруйск",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 44 581 69 06 / + 375 33 342 38 83",
    email: "novoe.rozhdenie.aa@mail.ru",
    address: "ул. К.Либкнехта, 58",
    location: {
      create: {
        lattitude: 53.138121,
        longitude: 29.220876, 
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
        weekday: "Th",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "НОВОЕ РОЖДЕНИЕ (вс)",
    birthday:  new Date('2011-11-14T10:00:00'),
    website: "",
    description: "актовый зал наркологии",
    city: "Бобруйск",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 44 581 69 06 / + 375 33 342 38 83",
    email: "novoe.rozhdenie.aa@mail.ru",
    address: "ул. Гагарина 4",
    location: {
      create: {
        lattitude: 53.177278,
        longitude: 29.192713, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ФОНАРЬ (вс)",
    birthday:  new Date('2016-12-05T10:00:00'),
    website: "",
    description: "актовый зал наркологии",
    city: "Бобруйск",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 44 510 00 10",
    email: "fonar.aa@mail.ru",
    address: "ул. Гагарина 4",
    location: {
      create: {
        lattitude: 53.177278,
        longitude: 29.192713, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ФОНАРЬ (пн, ср, пт)",
    birthday:  new Date('2016-12-05T10:00:00'),
    website: "",
    description: "",
    city: "Бобруйск",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 44 510 00 10",
    email: "fonar.aa@mail.ru",
    address: "ул. 50 лет ВЛКСМ, д.19",
    location: {
      create: {
        lattitude: 53.177278,
        longitude: 29.192713, 
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
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "МАЯК",
    birthday:  new Date('2016-12-05T10:00:00'),
    website: "",
    description: "ИК-2, библиотека",
    city: "Бобруйск",
    region: "Mogilevskaya",
    isActive: true,
    phone: "",
    email: "naumovich-1971@mail.ru",
    address: "ул. Сикорского, д.1",
    location: {
      create: {
        lattitude: 53.196334,
        longitude: 29.212218, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T10:00:00'),
        type: 'Open',
      }]
    }
  },{
    name: "ПОСЛЕДНИЙ ШАНС",
    birthday:  new Date('2016-12-05T10:00:00'),
    website: "",
    description: "церковь Спасо-Преображенская",
    city: "Шклов",
    region: "Mogilevskaya",
    isActive: true,
    phone: "+375 29 668 73 88",
    email: "",
    address: "ул. Почтовая, 2",
    location: {
      create: {
        lattitude: 54.203090,
        longitude: 30.304328, 
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
    name: "ПУТЬ К СЕБЕ",
    birthday:  new Date('2014-01-15T10:00:00'),
    website: "",
    description: "конференц зал ДЮСШ",
    city: "Березино",
    region: "Minskaya",
    isActive: true,
    phone: "+375 33 373 75 19",
    email: "",
    address: "ул. Победы, 13",
    location: {
      create: {
        lattitude: 53.833028,
        longitude: 28.990519, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ПЯТНИЦА",
    birthday:  new Date('2001-05-01T10:00:00'),
    website: "",
    description: "костёл",
    city: "Борисов",
    region: "Minskaya",
    isActive: true,
    phone: "+375 44 478 48 24",
    email: "aa_friday@mail.ru",
    address: "ул. 3-го Интернационала, 30В",
    location: {
      create: {
        lattitude: 54.242019,
        longitude: 28.506150, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ДВЕНАДЦАТЬ",
    website: "",
    description: "конференц зал ДЮСШ",
    city: "Бобр",
    region: "Minskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. Заводская, 10, к.2",
    location: {
      create: {
        lattitude: 53.888364,
        longitude: 27.587241, 
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
        weekday: "Th",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
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
        type: 'Closed',
      }]
    }
  },{
    name: "7 ВЕТРОВ",
    birthday:  new Date('2001-05-01T10:00:00'),
    website: "",
    description: "каплица костела «Сошествия Духа»",
    city: "Борисов",
    region: "Minskaya",
    isActive: true,
    phone: "",
    email: "7vetrovaa@gmail.com",
    address: "ул. Даумана, 95",
    location: {
      create: {
        lattitude: 54.203570,
        longitude: 28.484604, 
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
        weekday: "Th",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ПРОЗРЕНИЕ",
    birthday:  new Date('2001-05-01T10:00:00'),
    website: "",
    description: "отделение социальной адаптации и реабилитации ГУ ВТЦ СОН»",
    city: "Вилейка",
    region: "Minskaya",
    isActive: true,
    phone: "+375 29 276 09 52 / +275 29 950 02 36",
    email: "",
    address: "ул. Маркова, 49",
    location: {
      create: {
        lattitude: 54.485004,
        longitude: 26.903820, 
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
        weekday: "Fr",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ДРУГАЯ ЖИЗНЬ",
    website: "",
    description: "РПЦ (приют)",
    city: "Воложин",
    region: "Minskaya",
    isActive: true,
    phone: "+375 29 691 33 81",
    email: "",
    address: "ул. Партизанская, 15",
    location: {
      create: {
        lattitude: 54.090004,
        longitude: 26.517301, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T14:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ЖИЗНЬ",
    website: "",
    description: "библиотека",
    city: "Дзержинск",
    region: "Minskaya",
    isActive: true,
    phone: "+375 29 595 01 12",
    email: "",
    address: "ул. Ленинградская, 6",
    location: {
      create: {
        lattitude: 53.683963,
        longitude: 27.126634, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Tu",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Fr",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ВОСКРЕСЕНЬЕ",
    birthday:  new Date('2010-08-08T10:00:00'),
    website: "",
    description: "костел",
    city: "Жодино",
    region: "Minskaya",
    isActive: true,
    phone: "+375 29 937 28 21",
    email: "oleg-zhod@rambler.ru",
    address: "пр-т. Венисье",
    location: {
      create: {
        lattitude: 54.106620,
        longitude: 28.300593, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T16:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ВОСХОД",
    birthday:  new Date('2014-05-01T10:00:00'),
    website: "",
    description: "",
    city: "Замосточье",
    region: "Minskaya",
    isActive: true,
    phone: "+375 25 955 60 88",
    email: "jekabelan@mail.ru",
    address: "ул. Центральная 9",
    location: {
      create: {
        lattitude: 53.812468,
        longitude: 27.817740, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      },{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ЛУЧ НАДЕЖДЫ",
    website: "",
    description: "Церковь Преображения Господня (каплица)",
    city: "Заславль",
    region: "Minskaya",
    isActive: true,
    phone: "+375 25 907 68 36",
    email: "nata.zaslauye@gmail.com",
    address: "ул. Замковая, 6",
    location: {
      create: {
        lattitude: 54.007395,
        longitude: 27.291682, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T12:30:00'),
        type: 'Closed',
      }]
    }
  }, {
    name: "ПРЕОБРАЖЕНИЕ",
    website: "",
    description: "Территориальный центр социального обслуживания населения",
    city: "Клецк",
    region: "Minskaya",
    isActive: true,
    phone: "+375 29 529 77 28",
    email: "",
    address: "ул. Толстого, 24",
    location: {
      create: {
        lattitude: 53.063673,
        longitude: 26.631865, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T11:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ЗОЛОТАЯ ЖИЛА",
    birthday:  new Date('2006-05-10T10:00:00'),
    website: "",
    description: "каплица Св. Казимира",
    city: "Молодечно",
    region: "Minskaya",
    isActive: true,
    phone: "+375 33 384 22 34 / +375 44 492 45 30",
    email: "zolotaya_gila@mail.ru",
    address: "ул. Великий Гостинец",
    location: {
      create: {
        lattitude: 54.299971,
        longitude: 26.860491, 
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
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "последнее воскр. — открытое",
        weekday: "Su",
        time:  new Date('1995-12-17T13:30:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ОСОЗНАНИЕ",
    birthday:  new Date('2018-02-08T10:00:00'),
    website: "",
    description: "при церкви Георгия Победоносца",
    city: "Молодечно",
    region: "Minskaya",
    isActive: true,
    phone: "+375 44 781 29 92",
    email: "1815daniel@mail.ru",
    address: "ул. Новый свет, 52",
    location: {
      create: {
        lattitude: 54.324614,
        longitude: 26.855092, 
      },
    },
    meetings: {
      create: [{
        name: "Собрание",
        weekday: "We",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }, {
        name: "1-я суббота — открытое собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T18:30:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ФЕНИКС",
    birthday:  new Date('2011-06-27T10:00:00'),
    website: "",
    description: "костел Св. Антония",
    city: "Слуцк",
    region: "Minskaya",
    isActive: true,
    phone: "+375 25 524 85 76",
    email: "",
    address: "ул. Зелёная, 78",
    location: {
      create: {
        lattitude: 53.042336,
        longitude: 27.576652, 
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
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }, {
        name: "Собрание",
        weekday: "Su",
        time:  new Date('1995-12-17T12:00:00'),
        type: 'Open',
      }]
    }
  },{
    name: "ГЛОРИЯ",
    birthday:  new Date('2011-06-19T10:00:00'),
    website: "",
    description: "костел Св. Валентина",
    city: "Смолевичи",
    region: "Minskaya",
    isActive: true,
    phone: "+375 44 499 66 50",
    email: "",
    address: "ул. Подлесная, 12",
    location: {
      create: {
        lattitude: 54.034387,
        longitude: 28.088793, 
      },
    },
    meetings: {
      create: [ {
        name: "1-я суббота — открытое собрание",
        weekday: "Th",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Open',
      }, {
        name: "1-я суббота — открытое собрание",
        weekday: "Sa",
        time:  new Date('1995-12-17T17:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ТОЛЬКО СЕГОДНЯ",
    website: "",
    description: "помещение поликлиники",
    city: "Смолевичи",
    region: "Minskaya",
    isActive: true,
    phone: "",
    email: "",
    address: "ул. Первомайская, 101",
    location: {
      create: {
        lattitude: 54.015659,
        longitude: 28.098103, 
      },
    },
    meetings: {
      create: [ {
        name: "Собрание",
        weekday: "Mo",
        time:  new Date('1995-12-17T18:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ТОЛЬКО СЕГОДНЯ",
    website: "",
    description: "СПЦ",
    city: "Солигорск",
    region: "Minskaya",
    isActive: true,
    phone: "+375 29 916 76 96",
    email: "",
    address: "ул. Ленинского комсомола 14а",
    location: {
      create: {
        lattitude: 52.789263,
        longitude: 27.548688, 
      },
    },
    meetings: {
      create: [ {
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
        weekday: "Fr",
        time:  new Date('1995-12-17T19:00:00'),
        type: 'Closed',
      }]
    }
  },{
    name: "ЕДИНСТВО",
    birthday:  new Date('2015-05-30T10:00:00'),
    website: "",
    description: "напротив общежития Парковой 3",
    city: "Солигорск",
    region: "Minskaya",
    isActive: true,
    phone: "+375 44 798 01 02",
    email: "",
    address: "ул. Коржа, 1",
    location: {
      create: {
        lattitude: 52.781561,
        longitude: 27.536094, 
      },
    },
    meetings: {
      create: [ {
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
    name: 'parttwo',
    email: 'patrh@gmail.com',
    password: 'onwetwozero',
    groups: {
      create: constructedGroupsArray
    }
  })
}

main().catch(e => console.error(e))

