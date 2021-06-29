'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //  belongsToMany para relaciones Many-To-Many
      // user-role como tabla de unión, que tendrá las fk correspondientes (roleId y userId)
      Role.belongsToMany(models.User, {
        as: 'users',
        through: 'user-role',
        foreignKey: 'roleId',
      });
    }
  }
  Role.init(
    {
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
