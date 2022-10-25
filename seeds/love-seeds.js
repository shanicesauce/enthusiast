const { Love } = require('../models');

const loveData = [
  {
    user_id: 2,
    post_id: 3,
  },
];

const seedLoves = () => Love.bulkCreate(loveData);
module.exports = seedLoves;
