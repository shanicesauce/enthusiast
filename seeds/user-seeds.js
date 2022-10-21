const { User } = require('../models');

const userData = [
  {
    username: 'fashionista',
    email: 'fashiongirly@email.com',
    name_first: 'Bella',
    name_last: 'Hadid',
    interest_id: 3,
    password: 'password1',
  },
  {
    username: 'music4lyfe',
    email: 'musicgenius@email.com',
    name_first: 'Kanye',
    name_last: 'West',
    interest_id: 6,
    password: 'password1',
  },
  {
    username: 'shaniceissocool',
    email: 'shancie@email.com',
    name_first: 'shanice',
    name_last: 'sauceda',
    interest_id: 9,
    password: 'password1',
  },
  {
    username: 'sportsrefrence',
    email: 'idksports1@email.com',
    name_first: 'travis',
    name_last: 'kelce',
    interest_id: 12,
    password: 'password1',
  },
  {
    username: 'travelguru',
    email: 'travelallthetime@email.com',
    name_first: 'kemi',
    name_last: 'marie',
    interest_id: 13,
    password: 'password1',
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;