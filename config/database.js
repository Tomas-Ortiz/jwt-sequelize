require('dotenv').config();

module.exports = {
  // Database config
  host: process.env.DB_HOST || 'localhost',
  username: process.env.DB_USERNAME || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || 'auth',
  dialect: process.env.DB_DIALECT || 'mysql',

  // Seeders config
  seederStorage: 'sequelize',
  seederStorageTableName: 'seeds',

  // Migrations config
  migrationStorage: 'sequelize',
  migrationStorageTableName: 'migrations',
};
