'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      Student.hasMany(models.Enrollment, {
        foreignKey: 'student_id',
      });
    }
  }
  Student.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [3, 100],
          msg: 'name must have between 3 and 100 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'invalid email',
        },
      }
    },
    cpf: {
      type: DataTypes.STRING,
      validate: {
        isValidCpf: (field) => {
          if (!/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(field)) throw new Error('invalid cpf');
        },
      },
    },
    enabled: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
    tableName: 'students',
    paranoid: true,
    defaultScope: {
      where: {
        enabled: true
      }
    },
  });
  return Student;
};