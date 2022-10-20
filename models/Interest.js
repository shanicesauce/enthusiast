const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Interest extends Model {}

Interest.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    hobby: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'interest'
  }
);

module.exports = Interest;
