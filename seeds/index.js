const seedPost = require('./post-seeds');
const seedUser = require('./user-seeds');
const seedInterest = require('./interest-seeds');
const seedLoves = require('./love-seeds');
const seedinterestLevel = require('./interestLevel-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedinterestLevel();
  console.log('\n----- INTEREST LEVEL SEEDED -----\n');
  await seedInterest();
  console.log('\n----- INTEREST SEEDED -----\n');
  await seedUser();
  console.log('\n----- USERS SEEDED -----\n');
  await seedPost();
  console.log('\n----- POST SEEDED -----\n');
  await seedLoves();
  console.log('\n----- loveS SEEDED -----\n');

  process.exit(0);
};

seedAll();
