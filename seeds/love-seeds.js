const { Love } = require('../models');

const loveData = [
  {
    user_id: 2,
    post_id: 5,
  },
  {
    user_id: 12,
    post_id: 9,
  },
  {
    user_id: 21,
    post_id: 1,
  },
  {
    user_id: 16,
    post_id: 9,
  },
  {
    user_id: 8,
    post_id: 23,
  },
  {
    user_id: 9,
    post_id: 13,
  },

];

const seedLoves = () => Love.bulkCreate(loveData);
module.exports = seedLoves;
