const { Interest } = require('../models');

const interestData = [
  {
    hobby: 'music',
  },
  {
    hobby: 'travel',
  },
  {
    hobby: 'sports',
  },
  {
    hobby: 'fashion',
  },
  {
    hobby: 'tech',

  },
  {
    hobby: 'food'
  }
];

const seedinterest = () => Interest.bulkCreate(interestData);
module.exports = seedinterest;