// import all models
const Post = require('./Post');
const User = require('./User');
const Like = require('./Like');
const Comment = require('./Comment');
const Interest = require('./Interest');
const InterestLevel = require('./IntrestLevel');

// create associations
User.hasMany(Post, {
  foreignKey: 'user_id',
});

Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

User.belongsToMany(Post, {
  through: Like,
  as: 'liked_posts',

  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.belongsToMany(User, {
  through: Like,
  as: 'liked_posts',
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

Like.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Like.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

User.hasMany(Like, {
  foreignKey: 'user_id',
});

Post.hasMany(Like, {
  foreignKey: 'post_id',
});

Comment.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Comment.belongsTo(Post, {
  foreignKey: 'post_id',
  onDelete: 'SET NULL',
});

User.hasMany(Comment, {
  foreignKey: 'user_id',
  onDelete: 'SET NULL',
});

Post.hasMany(Comment, {
  foreignKey: 'post_id',
});

User.belongsTo(Interest, {
  foreignKey: 'interest_id',
});

Interest.hasMany(User, {
  foreignKey: 'interest_id',
  onDelete: 'SET NULL',
});

Post.belongsTo(Interest, {
  foreignKey: 'interest_id'
});

Interest.hasMany(Post, {
  foreignKey: 'interest_id'
});

User.hasOne(InterestLevel, {
  foreignKey: 'interest_level_id'
});
InterestLevel.belongsTo(User, {
  foreignKey: 'interest_level_id'
});


module.exports = { User, Post, Like, Comment, Interest, InterestLevel };
