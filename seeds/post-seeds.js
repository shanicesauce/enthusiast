const { Post } = require('../models');

const postData = [
  {
    post_text: 'fashion,fashion,fashion',
    user_id: 1,
  },
  {
    post_text: 'cause my brain hurts from trying to figure out the topics',
    user_id: 3,
  },
  {
    post_text: 'fuck pete davidson',
    user_id: 2,
  },
  {
    post_text: 'lets go chiefs',
    user_id: 4,
  },
  {
    post_text: 'travel,work,sleep,repeat',
    user_id: 5,
  },

];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;