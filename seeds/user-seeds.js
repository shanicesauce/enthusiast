const { User } = require('../models');

const userData = [
  {
    username: 'fashionista',
    email: 'fashiongirly@email.com',
    name_first: 'Bella',
    name_last: 'Hadid',
    interest_id: 4,
    interest_level_id: 3,
    password: 'password1',
  },
  {
    username: 'music4lyfe',
    email: 'musicgenius@email.com',
    name_first: 'Kanye',
    name_last: 'West',
    interest_id: 1,
    interest_level_id: 1,
    password: 'password1',
  },
  {
    username: 'shaniceissocool',
    email: 'shancie@email.com',
    name_first: 'shanice',
    name_last: 'sauceda',
    interest_id: 5,
    interest_level_id: 3,
    password: 'password1',
  },
  {
    username: 'sportsrefrence',
    email: 'idksports1@email.com',
    name_first: 'travis',
    name_last: 'kelce',
    interest_id: 3,
    interest_level_id: 3,
    password: 'password1',
  },
  {
    username: 'travelguru',
    email: 'travelallthetime@email.com',
    name_first: 'kemi',
    name_last: 'marie',
    interest_id: 2,
    interest_level_id: 1,
    password: 'password1',
  },
];

const seedUser = () => User.bulkCreate(userData);
module.exports = seedUser;