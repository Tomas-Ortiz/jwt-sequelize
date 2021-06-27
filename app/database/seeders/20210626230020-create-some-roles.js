'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
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
            userId: 13,
            roleId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 13,
            roleId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          {
            userId: 14,
            roleId: 1,
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
