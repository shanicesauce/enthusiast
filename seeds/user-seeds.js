const { User } = require('../models');

const userData = [
  {
    username: 'RapTalkSk',
    email: 'raptalksk@email.com',
    name_first: 'Shawn',
    name_last: 'Kemsley',
    interest_id: 1,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'Miguel',
    email: 'Miguel@email.com',
    name_first: 'Miguel',
    name_last: 'Pimental',
    interest_id: 1,
    interest_level_id: 3,
    password: 'password1',
  },
  {
    username: 'AaliyahInterlude',
    email: 'aaliyahinterlude@email.com',
    name_first: 'Aaliyah',
    name_last: 'Salinas',
    interest_id: 1,
    interest_level_id: 3,
    password: 'password1',
  },
  {
    username: 'JrMoneyGetting',
    email: 'JrMoneyGetting@email.com',
    name_first: 'Jr',
    name_last: 'Money',
    interest_id: 1,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'ComplexMusic',
    email: 'ComplexMusic@email.com',
    name_first: 'Complex',
    name_last: 'Music',
    interest_id: 1,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'SingleLilith',
    email: 'singlelilith@email.com',
    name_first: 'Aestrea',
    name_last: 'Luna',
    interest_id: 1,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'JimRose',
    email: 'jimrose@email.com',
    name_first: 'Jim',
    name_last: 'Rose',
    interest_id: 2,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'TravelVida',
    email: 'TravelVida@email.com',
    name_first: 'Vida',
    name_last: 'Miguel',
    interest_id: 2,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'ValaAfshar',
    email: 'ValaAfshar@email.com',
    name_first: 'Vala',
    name_last: 'Afshar',
    interest_id: 2,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'ChelseaFCUSA',
    email: 'ChelseaFCUSA@email.com',
    name_first: 'Chelsea',
    name_last: 'Steve',
    interest_id: 2,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'AllyJape',
    email: 'AllyJape@email.com',
    name_first: 'Ally',
    name_last: 'Jape',
    interest_id: 2,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'Zion420',
    email: 'Zion420@email.com',
    name_first: 'Zion',
    name_last: 'Brown',
    interest_id: 2,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'GamingFoodie',
    email: 'GamingFoodie@email.com',
    name_first: 'Alyssa',
    name_last: 'Kim',
    interest_id: 6,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'JetNomz',
    email: 'JetNomz@email.com',
    name_first: 'Jet',
    name_last: 'Norman',
    interest_id: 6,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'ColorOfArms',
    email: 'ColorOfArms@email.com',
    name_first: 'Lari',
    name_last: 'Gold',
    interest_id: 3,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'JimmyButler',
    email: 'JimmyButler@email.com',
    name_first: 'Jimmy',
    name_last: 'Buttler',
    interest_id: 3,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'OptimisticAustin',
    email: 'OptimisticAustin@email.com',
    name_first: 'Austin',
    name_last: 'Locke',
    interest_id: 3,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'dirtywhiteups',
    email: 'dirtywhiteups@email.com',
    name_first: 'Nicole',
    name_last: 'Dixon',
    interest_id: 4,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'TEXASTITTIE',
    email: 'TEXASTITTIE@email.com',
    name_first: 'Kamani',
    name_last: 'Ladson',
    interest_id: 4,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'wlwyearnbot',
    email: 'wlwyearnbot@email.com',
    name_first: 'Jennifer',
    name_last: 'Prince',
    interest_id: 4,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'steezy10',
    email: 'steezy10@email.com',
    name_first: 'Stezzy',
    name_last: 'Jobs',
    interest_id: 5,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'goblin_tech',
    email: 'goblintech@email.com',
    name_first: 'Molly',
    name_last: 'Goblin',
    interest_id: 5,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'TechBaeAsh',
    email: 'TechBaeAsh@email.com',
    name_first: 'Ash',
    name_last: 'Cash',
    interest_id: 5,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'sammymontgoms',
    email: 'sammymontgoms@email.com',
    name_first: 'Samantha',
    name_last: 'Montgomery',
    interest_id: 6,
    interest_level_id: 1,
    password: 'password1',
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;