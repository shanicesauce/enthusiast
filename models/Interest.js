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
    hobby: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false
    },
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
