const { Post } = require('../models');

const postData = [
  {
    post_text: 'Can\'t wait for juice wrld to drop friday',
    user_id: 1,
    interest_id: 1,
  },
  {
    post_text: 'You ask for music...I play new music',
    user_id: 2,
    interest_id: 1,
  },
  {
    post_text: '"I hate releasing music!!" - frank ocean, probably',
    user_id: 3,
    interest_id: 1,
  },
  {
    post_text: 'If rihanna thinks imma go watch a movie just to hear new music, she\'s absolutely right',
    user_id: 4,
    interest_id: 1,
  },
  {
    post_text: 'Drake and Rhianna really dropping new music the same day 😲',
    user_id: 5,
    interest_id: 1,
  },
  {
    post_text: 'Whenever Jungjook touches his heart, I feel like crying.',
    user_id: 6,
    interest_id: 1,
  },
  {
    post_text: 'I always travel by bus because I am afraid to fly',
    user_id: 7,
    interest_id: 2,
  },
  {
    post_text: 'Wish me safe travels ✈️ Heidelerg, Germany',
    user_id: 8,
    interest_id: 2,
  },
  {
    post_text: 'You are not too old to change your mind, make new friends, learn something, travel to a new place and fall in love again.',
    user_id: 9,
    interest_id: 2,
  },
  {
    post_text: 'Travel day ✈️',
    user_id: 10,
    interest_id: 2,
  },
  {
    post_text: 'Marina del Rey, United States 📍',
    user_id: 11,
    interest_id: 2,
  },
  {
    post_text: '📌 Venice Italy this week',
    user_id: 12,
    interest_id: 2,
  },
  {
    post_text: 'new youtube video for bacon kimchi fried rice',
    user_id: 13,
    interest_id: 6,
  },
  {
    post_text: 'compound butter is the love of my life',
    user_id: 14,
    interest_id: 6,
  },
  {
    post_text: 'fly egales fly',
    user_id: 15,
    interest_id: 3,
  },
  {
    post_text: 'can you dig it sucka',
    user_id: 16,
    interest_id: 3,
  },
  {
    post_text: 'Jimmy Butler is busy trolling. Andrew Wiggins is busy winning rings',
    user_id: 17,
    interest_id: 3,
  },
  {
    post_text: 'Corset Creation youtube Video dropping in 1 hour! Still taking commisions. Email Me <3 ',
    user_id: 18,
    interest_id: 4,
  },
  {
    post_text: 'The fashion firl that marsai martin is becoming is genuinely so insane.',
    user_id: 19,
    interest_id: 4,
  },
  {
    post_text: 'fashion designer gf x cant ever have too many clothes gf',
    user_id: 20,
    interest_id: 4,
  },
  {
    post_text: 'Creating a portfolio website tonight!',
    user_id: 21,
    interest_id: 5,
  },
  {
    post_text: 'What founders are working on onboarding/documentation products? I\'m preparing to bring one another dev and would love to help beta test while also getting organized',
    user_id: 22,
    interest_id: 5,
  },
  {
    post_text: 'We need a Python support group. 😂',
    user_id: 23,
    interest_id: 5,
  },
  {
    post_text: 'someone stop me, I can not stop making Onigirazu. It never disappoints.',
    user_id: 24,
    interest_id: 6,
  },

];

const seedPost = () => Post.bulkCreate(postData);
module.exports = seedPost;