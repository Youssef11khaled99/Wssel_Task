'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('author', {
      id: {
        type: Sequelize.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING(35),
        allowNull: false,
        unique: true
      },
      lastName: Sequelize.STRING(35),
    })
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('author');
  }
};
