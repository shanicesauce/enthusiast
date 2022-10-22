const { InterestLevel } = require('../models');

const interestLevel = [
  {
    level: 'hobby'
  },
  {
    level: 'amateur'
  },
  {
    level: 'professional'
  }
];

const seedinterestLevel = () => InterestLevel.bulkCreate(interestLevel);
module.exports = seedinterestLevel;