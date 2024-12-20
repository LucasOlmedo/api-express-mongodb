'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Enrollment.belongsTo(models.Student, {
        foreignKey: 'student_id',
      });

      Enrollment.belongsTo(models.Course, {
        foreignKey: 'course_id',
      });
    }
  }
  Enrollment.init({
    status: DataTypes.STRING,
    start_date: DataTypes.DATEONLY,
    finish_date: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Enrollment',
    tableName: 'enrollments',
  });
  return Enrollment;
};