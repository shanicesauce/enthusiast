const { Like } = require('../models');

const likeData = [
  {
    user_id: 2,
    post_id: 3
  }
];

const seedLikes = () => Like.bulkCreate(likeData);
module.exports = seedLikes;