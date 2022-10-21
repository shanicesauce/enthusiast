const { Interest } = require('../models');

const interestData = [
  {
    hobby: 'fashion',
    status: 'hobby',
  },
  {
    hobby: 'fashion',
    status: 'amateur',
  },
  {
    hobby: 'fashion',
    status: 'professional',
  },
  {
    hobby: 'music',
    status: 'hobby',
  },
  {
    hobby: 'music',
    status: 'amatuer',
  },
  {
    hobby: 'music',
    status: 'professional',
  },
  {
    hobby: 'tech',
    status: 'hobby',
  },
  {
    hobby: 'tech',
    status: 'amateur',
  },
  {
    hobby: 'tech',
    status: 'professional',
  },
  {
    hobby: 'sports',
    status: 'hobby',
  },
  {
    hobby: 'sports',
    status: 'amateur',
  },
  {
    hobby: 'sports',
    status: 'professional',
  },
  {
    hobby: 'travel',
    status: 'hobby',
  },
  {
    hobby: 'travel',
    status: 'amateur',
  },
  {
    hobby: 'travel',
    status: 'professional',
  },
];

const seedinterest = () => Interest.bulkCreate(interestData);
module.exports = seedinterest;