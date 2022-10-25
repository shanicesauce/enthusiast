const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Post extends Model {
  static uplove(body, models) {
    return models.Love.create({
      user_id: body.user_id,
      post_id: body.post_id,
    })
      .then(() => {
        return Post.findOne({
          where: {
            id: body.post_id,
          },
          attributes: [
            'id',
            'image',
            'post_text',
            'created_at',
            [sequelize.literal('(SELECT COUNT(*) FROM love WHERE post.id = love.post_id)'), 'love_count'],
          ],
          include: [
            {
              model: models.Comment,
              attributes: [
                'id',
                'comment_text',
                'post_id',
                'user_id',
                'created_at',
              ],
              include: {
                model: models.User,
                attributes: ['username'],
              },
            },
          ],
        });
      });
  }
}

// create fields/columns for Post model
Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    post_text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
    // interest_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'interest',
    //     key: 'id'
    //   }
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'post',
  }
);

module.exports = Post;
