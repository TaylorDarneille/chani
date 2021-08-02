'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  friend.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.INTEGER,
      min: 1900
    },
    month: {
      type: DataTypes.INTEGER,
      min: 1,
      max: 12
    },
    day: {
      type: DataTypes.INTEGER,
      min: 1,
      max: 31
    },
    hour: {
      type: DataTypes.INTEGER,
      min: 0,
      max: 12
    },
    minute: {
      type: DataTypes.INTEGER,
      min: 0,
      max: 59
    },
    meridiem: DataTypes.ENUM('am', 'pm')
  }, {
    sequelize,
    modelName: 'friend',
  });
  return friend;
};