const { Post } = require('../models');

const postData = [
  {
    post_text: 'fashion,fashion,fashion',
    user_id: 1,
    interest_id: 2,
  },
  {
    post_text: 'cause my brain hurts from trying to figure out the topics',
    user_id: 3,
    interest_id: 1,
  },
  {
    post_text: 'fuck pete davidson',
    user_id: 2,
    interest_id: 5,
  },
  {
    post_text: 'lets go chiefs',
    user_id: 4,
    interest_id: 6,
  },
  {
    post_text: 'travel,work,sleep,repeat',
    user_id: 5,
    interest_id: 1,
  },

];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;