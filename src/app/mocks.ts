const drivers = [
  {
    driverId: 'alonso',
    permanentNumber: '14',
    code: 'ALO',
    url: 'http://en.wikipedia.org/wiki/Fernando_Alonso',
    givenName: 'Fernando',
    familyName: 'Alonso',
    dateOfBirth: '1981-07-29',
    nationality: 'Spanish',
  },
  {
    driverId: 'bottas',
    permanentNumber: '77',
    code: 'BOT',
    url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
    givenName: 'Valtteri',
    familyName: 'Bottas',
    dateOfBirth: '1989-08-28',
    nationality: 'Finnish',
  },
  {
    driverId: 'gasly',
    permanentNumber: '10',
    code: 'GAS',
    url: 'http://en.wikipedia.org/wiki/Pierre_Gasly',
    givenName: 'Pierre',
    familyName: 'Gasly',
    dateOfBirth: '1996-02-07',
    nationality: 'French',
  },
  {
    driverId: 'giovinazzi',
    permanentNumber: '99',
    code: 'GIO',
    url: 'http://en.wikipedia.org/wiki/Antonio_Giovinazzi',
    givenName: 'Antonio',
    familyName: 'Giovinazzi',
    dateOfBirth: '1993-12-14',
    nationality: 'Italian',
  },
  {
    driverId: 'hamilton',
    permanentNumber: '44',
    code: 'HAM',
    url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
    givenName: 'Lewis',
    familyName: 'Hamilton',
    dateOfBirth: '1985-01-07',
    nationality: 'British',
  },
  {
    driverId: 'kubica',
    permanentNumber: '88',
    code: 'KUB',
    url: 'http://en.wikipedia.org/wiki/Robert_Kubica',
    givenName: 'Robert',
    familyName: 'Kubica',
    dateOfBirth: '1984-12-07',
    nationality: 'Polish',
  },
  {
    driverId: 'latifi',
    permanentNumber: '6',
    code: 'LAT',
    url: 'http://en.wikipedia.org/wiki/Nicholas_Latifi',
    givenName: 'Nicholas',
    familyName: 'Latifi',
    dateOfBirth: '1995-06-29',
    nationality: 'Canadian',
  },
  {
    driverId: 'leclerc',
    permanentNumber: '16',
    code: 'LEC',
    url: 'http://en.wikipedia.org/wiki/Charles_Leclerc',
    givenName: 'Charles',
    familyName: 'Leclerc',
    dateOfBirth: '1997-10-16',
    nationality: 'Monegasque',
  },
  {
    driverId: 'mazepin',
    permanentNumber: '9',
    code: 'MAZ',
    url: 'http://en.wikipedia.org/wiki/Nikita_Mazepin',
    givenName: 'Nikita',
    familyName: 'Mazepin',
    dateOfBirth: '1999-03-02',
    nationality: 'Russian',
  },
  {
    driverId: 'norris',
    permanentNumber: '4',
    code: 'NOR',
    url: 'http://en.wikipedia.org/wiki/Lando_Norris',
    givenName: 'Lando',
    familyName: 'Norris',
    dateOfBirth: '1999-11-13',
    nationality: 'British',
  },
];

const races = [
  {
    season: '2021',
    round: '1',
    url: 'http://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix',
    raceName: 'Bahrain Grand Prix',
    Circuit: {
      circuitId: 'bahrain',
      url: 'http://en.wikipedia.org/wiki/Bahrain_International_Circuit',
      circuitName: 'Bahrain International Circuit',
      Location: {
        lat: '26.0325',
        long: '50.5106',
        locality: 'Sakhir',
        country: 'Bahrain',
      },
    },
    date: '2021-03-28',
    time: '15:00:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '2',
        laps: '56',
        status: 'Finished',
        Time: {
          millis: '5523897',
          time: '1:32:03.897',
        },
        FastestLap: {
          rank: '4',
          lap: '44',
          Time: {
            time: '1:34.015',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '207.235',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '2',
    url: 'http://en.wikipedia.org/wiki/2021_Emilia_Romagna_Grand_Prix',
    raceName: 'Emilia Romagna Grand Prix',
    Circuit: {
      circuitId: 'imola',
      url: 'http://en.wikipedia.org/wiki/Autodromo_Enzo_e_Dino_Ferrari',
      circuitName: 'Autodromo Enzo e Dino Ferrari',
      Location: {
        lat: '44.3439',
        long: '11.7167',
        locality: 'Imola',
        country: 'Italy',
      },
    },
    date: '2021-04-18',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '3',
        laps: '63',
        status: 'Finished',
        Time: {
          millis: '7354598',
          time: '2:02:34.598',
        },
        FastestLap: {
          rank: '2',
          lap: '60',
          Time: {
            time: '1:17.524',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '227.960',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '3',
    url: 'http://en.wikipedia.org/wiki/2021_Portuguese_Grand_Prix',
    raceName: 'Portuguese Grand Prix',
    Circuit: {
      circuitId: 'portimao',
      url: 'http://en.wikipedia.org/wiki/Algarve_International_Circuit',
      circuitName: 'Autódromo Internacional do Algarve',
      Location: {
        lat: '37.227',
        long: '-8.6267',
        locality: 'Portimão',
        country: 'Portugal',
      },
    },
    date: '2021-05-02',
    time: '14:00:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '2',
        laps: '66',
        status: 'Finished',
        Time: {
          millis: '5671421',
          time: '1:34:31.421',
        },
        FastestLap: {
          rank: '4',
          lap: '47',
          Time: {
            time: '1:20.933',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '206.971',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '4',
    url: 'http://en.wikipedia.org/wiki/2021_Spanish_Grand_Prix',
    raceName: 'Spanish Grand Prix',
    Circuit: {
      circuitId: 'catalunya',
      url: 'http://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya',
      circuitName: 'Circuit de Barcelona-Catalunya',
      Location: {
        lat: '41.57',
        long: '2.26111',
        locality: 'Montmeló',
        country: 'Spain',
      },
    },
    date: '2021-05-09',
    time: '13:00:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '1',
        laps: '66',
        status: 'Finished',
        Time: {
          millis: '5587680',
          time: '1:33:07.680',
        },
        FastestLap: {
          rank: '5',
          lap: '54',
          Time: {
            time: '1:20.665',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '208.640',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '5',
    url: 'http://en.wikipedia.org/wiki/2021_Monaco_Grand_Prix',
    raceName: 'Monaco Grand Prix',
    Circuit: {
      circuitId: 'monaco',
      url: 'http://en.wikipedia.org/wiki/Circuit_de_Monaco',
      circuitName: 'Circuit de Monaco',
      Location: {
        lat: '43.7347',
        long: '7.42056',
        locality: 'Monte-Carlo',
        country: 'Monaco',
      },
    },
    date: '2021-05-23',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '2',
        laps: '78',
        status: 'Finished',
        Time: {
          millis: '5936820',
          time: '1:38:56.820',
        },
        FastestLap: {
          rank: '6',
          lap: '58',
          Time: {
            time: '1:14.649',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '160.929',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '6',
    url: 'http://en.wikipedia.org/wiki/2021_Azerbaijan_Grand_Prix',
    raceName: 'Azerbaijan Grand Prix',
    Circuit: {
      circuitId: 'baku',
      url: 'http://en.wikipedia.org/wiki/Baku_City_Circuit',
      circuitName: 'Baku City Circuit',
      Location: {
        lat: '40.3725',
        long: '49.8533',
        locality: 'Baku',
        country: 'Azerbaijan',
      },
    },
    date: '2021-06-06',
    time: '12:00:00Z',
    Results: [
      {
        number: '11',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'perez',
          permanentNumber: '11',
          code: 'PER',
          url: 'http://en.wikipedia.org/wiki/Sergio_P%C3%A9rez',
          givenName: 'Sergio',
          familyName: 'Pérez',
          dateOfBirth: '1990-01-26',
          nationality: 'Mexican',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '6',
        laps: '51',
        status: 'Finished',
        Time: {
          millis: '8016410',
          time: '2:13:36.410',
        },
        FastestLap: {
          rank: '2',
          lap: '45',
          Time: {
            time: '1:44.687',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '206.432',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '7',
    url: 'http://en.wikipedia.org/wiki/2021_French_Grand_Prix',
    raceName: 'French Grand Prix',
    Circuit: {
      circuitId: 'ricard',
      url: 'http://en.wikipedia.org/wiki/Paul_Ricard_Circuit',
      circuitName: 'Circuit Paul Ricard',
      Location: {
        lat: '43.2506',
        long: '5.79167',
        locality: 'Le Castellet',
        country: 'France',
      },
    },
    date: '2021-06-20',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '26',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '53',
        status: 'Finished',
        Time: {
          millis: '5245770',
          time: '1:27:25.770',
        },
        FastestLap: {
          rank: '1',
          lap: '35',
          Time: {
            time: '1:36.404',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '218.156',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '8',
    url: 'http://en.wikipedia.org/wiki/2021_Styrian_Grand_Prix',
    raceName: 'Styrian Grand Prix',
    Circuit: {
      circuitId: 'red_bull_ring',
      url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
      circuitName: 'Red Bull Ring',
      Location: {
        lat: '47.2197',
        long: '14.7647',
        locality: 'Spielberg',
        country: 'Austria',
      },
    },
    date: '2021-06-27',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '71',
        status: 'Finished',
        Time: {
          millis: '4938925',
          time: '1:22:18.925',
        },
        FastestLap: {
          rank: '3',
          lap: '68',
          Time: {
            time: '1:08.017',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '228.542',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '9',
    url: 'http://en.wikipedia.org/wiki/2021_Austrian_Grand_Prix',
    raceName: 'Austrian Grand Prix',
    Circuit: {
      circuitId: 'red_bull_ring',
      url: 'http://en.wikipedia.org/wiki/Red_Bull_Ring',
      circuitName: 'Red Bull Ring',
      Location: {
        lat: '47.2197',
        long: '14.7647',
        locality: 'Spielberg',
        country: 'Austria',
      },
    },
    date: '2021-07-04',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '26',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '71',
        status: 'Finished',
        Time: {
          millis: '5034543',
          time: '1:23:54.543',
        },
        FastestLap: {
          rank: '1',
          lap: '62',
          Time: {
            time: '1:06.200',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '234.815',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '10',
    url: 'http://en.wikipedia.org/wiki/2021_British_Grand_Prix',
    raceName: 'British Grand Prix',
    Circuit: {
      circuitId: 'silverstone',
      url: 'http://en.wikipedia.org/wiki/Silverstone_Circuit',
      circuitName: 'Silverstone Circuit',
      Location: {
        lat: '52.0786',
        long: '-1.01694',
        locality: 'Silverstone',
        country: 'UK',
      },
    },
    date: '2021-07-18',
    time: '14:00:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '2',
        laps: '52',
        status: 'Finished',
        Time: {
          millis: '7103284',
          time: '1:58:23.284',
        },
        FastestLap: {
          rank: '2',
          lap: '45',
          Time: {
            time: '1:29.699',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '236.430',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '11',
    url: 'http://en.wikipedia.org/wiki/2021_Hungarian_Grand_Prix',
    raceName: 'Hungarian Grand Prix',
    Circuit: {
      circuitId: 'hungaroring',
      url: 'http://en.wikipedia.org/wiki/Hungaroring',
      circuitName: 'Hungaroring',
      Location: {
        lat: '47.5789',
        long: '19.2486',
        locality: 'Budapest',
        country: 'Hungary',
      },
    },
    date: '2021-08-01',
    time: '13:00:00Z',
    Results: [
      {
        number: '31',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'ocon',
          permanentNumber: '31',
          code: 'OCO',
          url: 'http://en.wikipedia.org/wiki/Esteban_Ocon',
          givenName: 'Esteban',
          familyName: 'Ocon',
          dateOfBirth: '1996-09-17',
          nationality: 'French',
        },
        Constructor: {
          constructorId: 'alpine',
          url: 'http://en.wikipedia.org/wiki/Alpine_F1_Team',
          name: 'Alpine F1 Team',
          nationality: 'French',
        },
        grid: '8',
        laps: '70',
        status: 'Finished',
        Time: {
          millis: '7483199',
          time: '2:04:43.199',
        },
        FastestLap: {
          rank: '5',
          lap: '54',
          Time: {
            time: '1:21.421',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '193.704',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '12',
    url: 'http://en.wikipedia.org/wiki/2021_Belgian_Grand_Prix',
    raceName: 'Belgian Grand Prix',
    Circuit: {
      circuitId: 'spa',
      url: 'http://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps',
      circuitName: 'Circuit de Spa-Francorchamps',
      Location: {
        lat: '50.4372',
        long: '5.97139',
        locality: 'Spa',
        country: 'Belgium',
      },
    },
    date: '2021-08-29',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '12.5',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '1',
        status: 'Finished',
        Time: {
          millis: '207071',
          time: '3:27.071',
        },
      },
    ],
  },
  {
    season: '2021',
    round: '13',
    url: 'http://en.wikipedia.org/wiki/2021_Dutch_Grand_Prix',
    raceName: 'Dutch Grand Prix',
    Circuit: {
      circuitId: 'zandvoort',
      url: 'http://en.wikipedia.org/wiki/Circuit_Zandvoort',
      circuitName: 'Circuit Park Zandvoort',
      Location: {
        lat: '52.3888',
        long: '4.54092',
        locality: 'Zandvoort',
        country: 'Netherlands',
      },
    },
    date: '2021-09-05',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '72',
        status: 'Finished',
        Time: {
          millis: '5405395',
          time: '1:30:05.395',
        },
        FastestLap: {
          rank: '3',
          lap: '60',
          Time: {
            time: '1:13.275',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '209.244',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '14',
    url: 'http://en.wikipedia.org/wiki/2021_Italian_Grand_Prix',
    raceName: 'Italian Grand Prix',
    Circuit: {
      circuitId: 'monza',
      url: 'http://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza',
      circuitName: 'Autodromo Nazionale di Monza',
      Location: {
        lat: '45.6156',
        long: '9.28111',
        locality: 'Monza',
        country: 'Italy',
      },
    },
    date: '2021-09-12',
    time: '13:00:00Z',
    Results: [
      {
        number: '3',
        position: '1',
        positionText: '1',
        points: '26',
        Driver: {
          driverId: 'ricciardo',
          permanentNumber: '3',
          code: 'RIC',
          url: 'http://en.wikipedia.org/wiki/Daniel_Ricciardo',
          givenName: 'Daniel',
          familyName: 'Ricciardo',
          dateOfBirth: '1989-07-01',
          nationality: 'Australian',
        },
        Constructor: {
          constructorId: 'mclaren',
          url: 'http://en.wikipedia.org/wiki/McLaren',
          name: 'McLaren',
          nationality: 'British',
        },
        grid: '2',
        laps: '53',
        status: 'Finished',
        Time: {
          millis: '4914365',
          time: '1:21:54.365',
        },
        FastestLap: {
          rank: '1',
          lap: '53',
          Time: {
            time: '1:24.812',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '245.894',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '15',
    url: 'http://en.wikipedia.org/wiki/2021_Russian_Grand_Prix',
    raceName: 'Russian Grand Prix',
    Circuit: {
      circuitId: 'sochi',
      url: 'http://en.wikipedia.org/wiki/Sochi_Autodrom',
      circuitName: 'Sochi Autodrom',
      Location: {
        lat: '43.4057',
        long: '39.9578',
        locality: 'Sochi',
        country: 'Russia',
      },
    },
    date: '2021-09-26',
    time: '12:00:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '4',
        laps: '53',
        status: 'Finished',
        Time: {
          millis: '5441001',
          time: '1:30:41.001',
        },
        FastestLap: {
          rank: '2',
          lap: '43',
          Time: {
            time: '1:37.575',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '215.760',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '16',
    url: 'http://en.wikipedia.org/wiki/2021_Turkish_Grand_Prix',
    raceName: 'Turkish Grand Prix',
    Circuit: {
      circuitId: 'istanbul',
      url: 'http://en.wikipedia.org/wiki/Istanbul_Park',
      circuitName: 'Istanbul Park',
      Location: {
        lat: '40.9517',
        long: '29.405',
        locality: 'Istanbul',
        country: 'Turkey',
      },
    },
    date: '2021-10-10',
    time: '12:00:00Z',
    Results: [
      {
        number: '77',
        position: '1',
        positionText: '1',
        points: '26',
        Driver: {
          driverId: 'bottas',
          permanentNumber: '77',
          code: 'BOT',
          url: 'http://en.wikipedia.org/wiki/Valtteri_Bottas',
          givenName: 'Valtteri',
          familyName: 'Bottas',
          dateOfBirth: '1989-08-28',
          nationality: 'Finnish',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '1',
        laps: '58',
        status: 'Finished',
        Time: {
          millis: '5464103',
          time: '1:31:04.103',
        },
        FastestLap: {
          rank: '1',
          lap: '58',
          Time: {
            time: '1:30.432',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '212.500',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '17',
    url: 'http://en.wikipedia.org/wiki/2021_United_States_Grand_Prix',
    raceName: 'United States Grand Prix',
    Circuit: {
      circuitId: 'americas',
      url: 'http://en.wikipedia.org/wiki/Circuit_of_the_Americas',
      circuitName: 'Circuit of the Americas',
      Location: {
        lat: '30.1328',
        long: '-97.6411',
        locality: 'Austin',
        country: 'USA',
      },
    },
    date: '2021-10-24',
    time: '19:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '56',
        status: 'Finished',
        Time: {
          millis: '5676552',
          time: '1:34:36.552',
        },
        FastestLap: {
          rank: '2',
          lap: '52',
          Time: {
            time: '1:39.096',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '200.278',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '18',
    url: 'http://en.wikipedia.org/wiki/2021_Mexican_Grand_Prix',
    raceName: 'Mexico City Grand Prix',
    Circuit: {
      circuitId: 'rodriguez',
      url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Hermanos_Rodr%C3%ADguez',
      circuitName: 'Autódromo Hermanos Rodríguez',
      Location: {
        lat: '19.4042',
        long: '-99.0907',
        locality: 'Mexico City',
        country: 'Mexico',
      },
    },
    date: '2021-11-07',
    time: '19:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '3',
        laps: '71',
        status: 'Finished',
        Time: {
          millis: '5919086',
          time: '1:38:39.086',
        },
        FastestLap: {
          rank: '2',
          lap: '52',
          Time: {
            time: '1:18.999',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '196.134',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '19',
    url: 'http://en.wikipedia.org/wiki/2021_S%C3%A3o_Paulo_Grand_Prix',
    raceName: 'São Paulo Grand Prix',
    Circuit: {
      circuitId: 'interlagos',
      url: 'http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Jos%C3%A9_Carlos_Pace',
      circuitName: 'Autódromo José Carlos Pace',
      Location: {
        lat: '-23.7036',
        long: '-46.6997',
        locality: 'São Paulo',
        country: 'Brazil',
      },
    },
    date: '2021-11-14',
    time: '17:00:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '10',
        laps: '71',
        status: 'Finished',
        Time: {
          millis: '5542851',
          time: '1:32:22.851',
        },
        FastestLap: {
          rank: '2',
          lap: '46',
          Time: {
            time: '1:11.982',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '215.503',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '20',
    url: 'http://en.wikipedia.org/wiki/2021_Qatar_Grand_Prix',
    raceName: 'Qatar Grand Prix',
    Circuit: {
      circuitId: 'losail',
      url: 'http://en.wikipedia.org/wiki/Losail_International_Circuit',
      circuitName: 'Losail International Circuit',
      Location: {
        lat: '25.49',
        long: '51.4542',
        locality: 'Al Daayen',
        country: 'Qatar',
      },
    },
    date: '2021-11-21',
    time: '14:00:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '25',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '1',
        laps: '57',
        status: 'Finished',
        Time: {
          millis: '5068471',
          time: '1:24:28.471',
        },
        FastestLap: {
          rank: '2',
          lap: '50',
          Time: {
            time: '1:25.084',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '227.633',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '21',
    url: 'http://en.wikipedia.org/wiki/2021_Saudi_Arabian_Grand_Prix',
    raceName: 'Saudi Arabian Grand Prix',
    Circuit: {
      circuitId: 'jeddah',
      url: 'http://en.wikipedia.org/wiki/Jeddah_Street_Circuit',
      circuitName: 'Jeddah Corniche Circuit',
      Location: {
        lat: '21.6319',
        long: '39.1044',
        locality: 'Jeddah',
        country: 'Saudi Arabia',
      },
    },
    date: '2021-12-05',
    time: '17:30:00Z',
    Results: [
      {
        number: '44',
        position: '1',
        positionText: '1',
        points: '26',
        Driver: {
          driverId: 'hamilton',
          permanentNumber: '44',
          code: 'HAM',
          url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
          givenName: 'Lewis',
          familyName: 'Hamilton',
          dateOfBirth: '1985-01-07',
          nationality: 'British',
        },
        Constructor: {
          constructorId: 'mercedes',
          url: 'http://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One',
          name: 'Mercedes',
          nationality: 'German',
        },
        grid: '1',
        laps: '50',
        status: 'Finished',
        Time: {
          millis: '7575118',
          time: '2:06:15.118',
        },
        FastestLap: {
          rank: '1',
          lap: '47',
          Time: {
            time: '1:30.734',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '244.962',
          },
        },
      },
    ],
  },
  {
    season: '2021',
    round: '22',
    url: 'http://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix',
    raceName: 'Abu Dhabi Grand Prix',
    Circuit: {
      circuitId: 'yas_marina',
      url: 'http://en.wikipedia.org/wiki/Yas_Marina_Circuit',
      circuitName: 'Yas Marina Circuit',
      Location: {
        lat: '24.4672',
        long: '54.6031',
        locality: 'Abu Dhabi',
        country: 'UAE',
      },
    },
    date: '2021-12-12',
    time: '13:00:00Z',
    Results: [
      {
        number: '33',
        position: '1',
        positionText: '1',
        points: '26',
        Driver: {
          driverId: 'max_verstappen',
          permanentNumber: '33',
          code: 'VER',
          url: 'http://en.wikipedia.org/wiki/Max_Verstappen',
          givenName: 'Max',
          familyName: 'Verstappen',
          dateOfBirth: '1997-09-30',
          nationality: 'Dutch',
        },
        Constructor: {
          constructorId: 'red_bull',
          url: 'http://en.wikipedia.org/wiki/Red_Bull_Racing',
          name: 'Red Bull',
          nationality: 'Austrian',
        },
        grid: '1',
        laps: '58',
        status: 'Finished',
        Time: {
          millis: '5417345',
          time: '1:30:17.345',
        },
        FastestLap: {
          rank: '1',
          lap: '39',
          Time: {
            time: '1:26.103',
          },
          AverageSpeed: {
            units: 'kph',
            speed: '220.800',
          },
        },
      },
    ],
  },
];

export { drivers, races };
