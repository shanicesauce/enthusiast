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
  {
    user_id: 19,
    post_id: 1,
  },
  {
    user_id: 23,
    post_id: 3,
  },
  {
    user_id: 14,
    post_id: 15,
  },
  {
    user_id: 12,
    post_id: 11,
  },
  {
    user_id: 8,
    post_id: 1,
  },
  {
    user_id: 21,
    post_id: 21,
  },
  {
    user_id: 11,
    post_id: 16,
  },

];

const seedLoves = () => Love.bulkCreate(loveData);
module.exports = seedLoves;
