require('dotenv').config();

module.exports = {
  // Database config
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,

  // Seeders config
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',

  // Migrations config
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations',
};
