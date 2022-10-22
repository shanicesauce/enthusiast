const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class InterestLevel extends Model {}

InterestLevel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    level: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'interest_level',
  }
);

module.exports = InterestLevel;
