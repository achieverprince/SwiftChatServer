'use strict';

// Development specific configuration
// ==================================
module.exports = {

  // Sequelize connection opions
  sequelize: {
    uri: 'mysql://localhost:3306/sequelize',
    options: {
      dbName:'sequelize',
      username:'sequelize',
      password:'sequelize@123',
      host: "192.168.137.66",
      port: 3306,
      dialect: 'mysql'
    }
  },

  // Seed database on startup
  seedDB: true

};
