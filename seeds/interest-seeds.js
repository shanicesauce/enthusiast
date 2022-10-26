const { Interest } = require('../models');

const interestData = [
  {
    hobby: 'Music',
    //1
  },
  {
    hobby: 'Travel',
    //2
  },
  {
    hobby: 'Sports',
    //3
  },
  {
    hobby: 'Fashion',
    //4
  },
  {
    hobby: 'Tech',
    //5

  },
  {
    hobby: 'Food'
    //6
  }
];

const seedinterest = () => Interest.bulkCreate(interestData);
module.exports = seedinterest;