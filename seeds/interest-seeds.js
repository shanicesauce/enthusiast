const { Interest } = require('../models');

const interestData = [
  {
    hobby: 'Music',
  },
  {
    hobby: 'Travel',
  },
  {
    hobby: 'Sports',
  },
  {
    hobby: 'Fashion',
  },
  {
    hobby: 'Tech',

  },
  {
    hobby: 'Food'
  }
];

const seedinterest = () => Interest.bulkCreate(interestData);
module.exports = seedinterest;