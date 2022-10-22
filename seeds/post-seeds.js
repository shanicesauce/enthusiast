const { Post } = require('../models');

const postData = [
  {
    post_text: 'making all this money walking shows',
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
    post_text: 'idk another team to insult so whatever',
    user_id: 4,
  },
  {
    post_text: 'maldives here i come',
    user_id: 5,
  },

];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;