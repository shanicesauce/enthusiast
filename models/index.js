// import all models
const Post = require('./Post');
const User = require('./User');
const Love = require('./Love');
const Comment = require('./Comment');
const Interest = require('./Interest');
const InterestLevel = require('./InterestLevel');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  // onDelete: 'SET NULL',
});

User.belongsToMany(Post, {
  through: Love,
  as: 'loved_posts',
  foreignKey: 'user_id',
  // onDelete: 'SET NULL',
});

Post.belongsToMany(User, {
  through: Love,
  as: 'loved_posts',
  foreignKey: 'post_id',
  // onDelete: 'SET NULL',
});

Love.belongsTo(User, {
  foreignKey: 'user_id',
  // onDelete: 'SET NULL',
});

Love.belongsTo(Post, {
  foreignKey: 'post_id',
  // onDelete: 'SET NULL',
});

User.hasMany(Love, {
  foreignKey: 'user_id',
});

Post.hasMany(Love, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  // onDelete: 'SET NULL',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  // onDelete: 'SET NULL',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  // onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

User.belongsTo(Interest, {
  foreignKey: 'interest_id',
});
//^^^^^^^//
Interest.hasMany(User, {
  foreignKey: 'interest_id',
  onDelete: 'SET NULL',
});

Post.belongsTo(Interest, {
  foreignKey: 'interest_id',
  onDelete: 'SET NULL',
});

Interest.hasMany(Post, {
  foreignKey: 'interest_id'
});

User.hasOne(InterestLevel, {
  foreignKey: 'interest_level_id',
});
InterestLevel.belongsTo(User, {
  foreignKey: 'interest_level_id',
});

module.exports = { User, Post, Love, Comment, Interest, InterestLevel };
