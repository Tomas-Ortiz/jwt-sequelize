'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Post, { as: 'posts', foreignKey: 'userId' });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: {
            msg: 'El nombre solo puede contener letras',
          },
          len: {
            args: [2, 50],
            msg: 'El nombre debe tener entre 2 y 50 caracteres',
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: {
            arg: [9, 255],
            msg: 'La contraseña debe tener entre 9 y 255 caracteres',
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: {
            msg: 'El email tiene que ser un correo válido',
          },
        },
      },
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
