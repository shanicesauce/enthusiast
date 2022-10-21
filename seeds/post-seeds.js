const { Post } = require('../models');

const postData = [
  {
    title: 'New day New runway',
    post_text: 'making all this money walking shows',
    user_id: 1,
  },
  {
    title: 'project headache',
    post_text: 'cause my brain hurts from trying to figure out the topics',
    user_id: 3,
  },
  {
    title: 'i lost my wife',
    post_text: 'fuck pete davidson',
    user_id: 2,
  },
  {
    title: 'cowgirls suck',
    post_text: 'idk another team to insult so whatever',
    user_id: 4,
  },
  {
    title: 'new stop ',
    post_text: 'maldives here i come',
    user_id: 5,
  },

];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;