'use strict';
const { User } = require('../../models/index');
const bcrypt = require('bcrypt');
const authConfig = require('../../../config/auth');
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Se crean 2 usuarios, con sus respectivos posts
    return Promise.all([
      User.create(
        {
          name: 'Agustin',
          email: 'agustin@gmail.com',
          password: bcrypt.hashSync(
            '123456789',
            Number.parseInt(authConfig.salt)
          ),
          posts: [
            {
              title: 'Title 1',
              body: 'Body 1',
            },
            {
              title: 'Title 2',
              body: 'Body 2',
            },
            {
              title: 'Title 3',
              body: 'Body 3',
            },
          ],
        },
        {
          include: 'posts',
        }
      ),

      User.create(
        {
          name: 'Tomas',
          email: 'tomass@gmail.com',
          password: bcrypt.hashSync(
            '123456789',
            Number.parseInt(authConfig.salt)
          ),
          posts: [
            {
              title: 'Title 4',
              body: 'Body 4',
            },
            {
              title: 'Title 5',
              body: 'Body 5',
            },
          ],
        },
        {
          include: 'posts',
        }
      ),
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.bulkDelete('posts', null, {}),
      queryInterface.bulkDelete('users', null, {}),
    ]);
  },
};
