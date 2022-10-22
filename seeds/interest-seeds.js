const { Interest } = require('../models');

const interestData = [
  {
    hobby: 'fashion',
  },
  {
    hobby: 'music',
  },
  {
    hobby: 'tech',
  },
  {
    hobby: 'sports',
  },
  {
    hobby: 'travel',

  },
];

const seedinterest = () => Interest.bulkCreate(interestData);
module.exports = seedinterest;