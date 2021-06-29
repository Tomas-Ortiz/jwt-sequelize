'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Se insertan datos en la tabla roles y user-role (tabla intermedia)
    return Promise.all([
      queryInterface.bulkInsert(
        'roles',
        [
          { role: 'admin', createdAt: new Date(), updatedAt: new Date() },
          { role: 'user', createdAt: new Date(), updatedAt: new Date() },
        ],
        {}
      ),
      queryInterface.bulkInsert(
        'user-role',
        [
          {
            userId: 1,
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 1,
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 2,
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
        ],
        {}
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('roles', null, {}),
      queryInterface.bulkDelete('user-role', null, {}),
    ]);
  },
};
