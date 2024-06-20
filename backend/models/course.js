// ../models/course.js

const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/database');

class Course extends Model {}

Course.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  instructor: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Course',
});

module.exports = Course;
